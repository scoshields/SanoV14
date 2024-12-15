import { SESSION_SECTIONS, ASSESSMENT_SECTIONS } from './constants';

function ensureMinimumSentences(content: string, minSentences: number): string {
  const sentences = content.split(/[.!?]+\s+/).filter(Boolean);
  if (sentences.length < minSentences) {
    // Add placeholder sentences if needed
    return content + ' ' + Array(minSentences - sentences.length)
      .fill('Additional details will be provided in follow-up documentation.')
      .join(' ');
  }
  return content;
}

function standardizeLineBreaks(content: string): string {
  return content
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\n{3,}/g, '\n\n');
}

function ensureSectionSpacing(content: string): string {
  return content
    .replace(/([A-Z][A-Z\s/&]+:)/g, '\n\n$1\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function formatSection(section: string): string {
  let formatted = section
    .replace(/^\s+|\s+$/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\[\s*|\s*\]/g, '');

  // Ensure minimum sentence count
  formatted = ensureMinimumSentences(formatted, 5);

  return formatted;
}

export function formatResponse(content: string, isAssessment: boolean): string {
  let formattedContent = standardizeLineBreaks(content);
  const sections = isAssessment ? ASSESSMENT_SECTIONS : SESSION_SECTIONS;

  // Process each section
  sections.forEach(sectionHeader => {
    const sectionRegex = new RegExp(
      `(${sectionHeader}:)([^]*?)(?=${sections.map(s => `${s}:`).join('|')}|$)`,
      'g'
    );

    formattedContent = formattedContent.replace(sectionRegex, (match) => {
      const [header, content] = match.split(':');
      const formattedSectionContent = formatSection(content || '');
      return `${header}:\n${formattedSectionContent.trim()}\n`;
    });
  });

  // Final formatting
  formattedContent = ensureSectionSpacing(formattedContent);

  return formattedContent;
}
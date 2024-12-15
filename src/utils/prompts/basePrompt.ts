export const basePromptTemplate = `
As a clinical documentation assistant, transform session notes while:

1. Maintaining Professional Standards:

- Use appropriate clinical terminology
- Adhere to ethical guidelines
- Ensure HIPAA compliance
- Maintain objectivity

2. Structuring Content:
- Presenting Problem
- Status Changes (medical/behavioral/psychiatric)
- Interventions & Activities
- Behavior & Response
- Progress Assessment

3. Documentation Guidelines:
- Use clear, professional language
- Avoid assumptions or personal opinions
- Focus on observable behaviors
- Include relevant clinical observations
- Document chronologically

4. Other Guidelines: 
- Each section MUST contain between 5 and 10 complete sentences
- Ensure each sentence is clear and complete
- Each section MUST be separated by blank lines
- Each section MUST start with its header on a new line
- Avoid run-on sentences or excessive comma usage
- When referring to the Therapist, use the acronym TH
- When referring to the Client, use the acronym CL
- There should be a logical connection between goals and interventions
- Use the GIRP type notes assessment

If any part of the output does not align with the requirements, revise it automatically before displaying it.
`;

export const assessmentPromptTemplate = `
As a clinical documentation assistant, create a comprehensive clinical assessment that:

1. Follows Professional Standards:
- Uses appropriate clinical terminology and diagnostic language
- Maintains objectivity and clinical judgment
- Adheres to ethical guidelines and HIPAA compliance

2. Structures Content:
- Client Information & Referral Source
- Presenting Problems & Symptoms
- Mental Status Observations
- Risk Assessment
- Clinical History
- Assessment Results
- Diagnostic Impressions
- Treatment Recommendations

3. Documentation Guidelines:
- Present information in clear, concise paragraphs
- Support clinical impressions with observed data
- Include relevant assessment scores and measures
- Document both strengths and challenges
- Note any rule-out conditions
- Provide clear treatment recommendations

4. Format Guidelines:
- Organize in a logical, flowing narrative
- Use professional language while maintaining readability
- Include specific examples to support conclusions
- Integrate all provided information into a cohesive assessment

If any part of the output does not align with the requirements, revise it automatically before displaying it.
`;

export const sessionNoteFormat = `
Provide a session note based on the following format. For each section, write 5-10 complete sentences. Avoid short, incomplete responses.

CURRENT TREATMENT GOAL/FOCUS OF SESSION:
[Write 5-10 sentences clearly defining the objectives the client is working towards.]

CHANGES TO MEDICAL, BEHAVIORAL, OR PSYCHIATRIC STATUS SINCE LAST APPOINTMENT:
[Write 5-10 sentences noting any changes observed or reported, if any.]

SPECIFIC INTERVENTIONS AND STRUCTURED ACTIVITIES:
[Write 5-10 sentences describing specific therapeutic strategies and structured activities, including the therapist's role.]

CONSUMER RESPONSE TO INTERVENTIONS:
[Write 5-10 sentences explaining the client’s reactions and progress related to the interventions.]

TREATMENT PROGRESS OR LACK OF PROGRESS:
[Write 5-10 sentences summarizing progress made or challenges faced.]

FOLLOW-UP PLAN/TREATMENT SCHEDULE:
[Write 5-10 sentences outlining future interventions and goals to address in upcoming sessions.]
`;

export const assessmentNoteFormat = `
Please provide a detailed report in the format below. Each section must contain 5-10 complete sentences. Ensure responses are thorough and avoid overly brief or incomplete statements.

CLIENT INFORMATION:
[Write 5-10 sentences about the client's basic demographics and the referral source.]

PRESENTING PROBLEM:
[Write 5-10 sentences detailing the client’s primary concerns and symptoms.]

MENTAL STATUS & CLINICAL OBSERVATIONS:
[Write 5-10 sentences describing the client’s behavior, appearance, mood, and mental status findings.]

ASSESSMENT RESULTS:
[Write 5-10 sentences summarizing relevant assessment scores, clinical measures, or findings.]

CLINICAL HISTORY:
[Write 5-10 sentences summarizing the client’s mental health, medical, and treatment history.]

RISK ASSESSMENT:
[Write 5-10 sentences discussing safety concerns and protective factors relevant to the client.]

CLINICAL IMPRESSION:
[Write 5-10 sentences explaining diagnostic considerations and clinical reasoning.]

STRENGTHS AND CHALLENGES:
[Write 5-10 sentences outlining the client’s strengths and areas of difficulty.]

TREATMENT RECOMMENDATIONS:
[Write 5-10 sentences detailing a specific treatment plan and recommendations.]
`;
const orthopedicSources = [
  ['Knee replacement — AAOS OrthoInfo', 'https://orthoinfo.aaos.org/en/treatment/total-knee-replacement/'],
  ['Hip replacement — AAOS OrthoInfo', 'https://orthoinfo.aaos.org/en/treatment/total-hip-replacement/']
];
const fertilitySources = [
  ['Infertility evaluation — ASRM', 'https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026/'],
  ['IVF treatment journey — ReproductiveFacts.org', 'https://www.reproductivefacts.org/patient-journeys/in-vitro-fertilization-treatment/']
];

export const treatmentContent = {
  'robotic-joint-replacement': {
    overview: 'Joint replacement is a surgical option that replaces damaged joint surfaces with an implant. For some knee replacement plans, robotic-assisted tools may be discussed as part of surgical planning. The surgeon explains whether this approach is available and appropriate after reviewing your condition.',
    signals: ['Joint pain that continues to affect daily activities', 'Stiffness or reduced movement', 'Symptoms that have not improved enough with care already tried', 'Questions about replacement or robotic-assisted options'],
    planning: 'A consultation reviews your symptoms, health history and any previous imaging or treatment. Your surgeon can discuss non-surgical care, whether joint replacement may be considered, the available approach and the questions that should be answered before you decide.',
    steps: ['Discuss symptoms, goals and medical history', 'Review examination findings and relevant reports', 'Talk through appropriate care options and their trade-offs', 'Agree on follow-up or the next evaluation step'],
    faqs: [['Does robotic assistance suit every patient?', 'No. Suitability depends on the joint, the clinical findings, available equipment and the surgeon’s assessment. Ask the clinic which options are currently available for your case.'], ['Does a consultation mean I need surgery?', 'No. A consultation is an opportunity to understand the cause of your symptoms and discuss options. A recommendation depends on an individual assessment.']],
    sources: orthopedicSources
  },
  'knee-replacement': {
    overview: 'Knee replacement surgery replaces damaged joint surfaces with implant components. It may be discussed when knee pain and stiffness substantially limit everyday activities and other appropriate treatments have not provided enough relief. The decision is based on an individual assessment, not an X-ray or symptom alone.',
    signals: ['Persistent knee pain during walking or everyday tasks', 'Stiffness or difficulty bending the knee', 'Swelling or reduced movement that keeps returning', 'Pain that affects sleep, work or activities you value'],
    planning: 'Your orthopaedic consultation considers how the knee feels and moves, your health history, previous care and any imaging you bring. Your surgeon can explain whether continued non-surgical care, further evaluation or a replacement discussion may be the next step.',
    steps: ['Describe where the pain occurs and what affects it', 'Review relevant medical history and previous treatment', 'Discuss examination or imaging findings', 'Consider the benefits, limitations and recovery questions for each option'],
    faqs: [['When is knee replacement considered?', 'It may be considered when knee pain and loss of function remain significant despite appropriate non-surgical care. A surgeon assesses each person individually.'], ['Will I need an X-ray?', 'Your clinician will decide whether imaging is useful. Bring recent reports if you already have them.']],
    sources: [orthopedicSources[0]]
  },
  'hip-replacement': {
    overview: 'Hip replacement surgery replaces damaged parts of the hip joint with implant components. It may be discussed when hip pain and stiffness make activities such as walking or getting in and out of a chair difficult, especially if appropriate non-surgical care has not helped enough. Assessment and recommendations are individual.',
    signals: ['Hip or groin discomfort that limits walking or daily activity', 'Stiffness that makes movement or getting dressed difficult', 'Pain that persists despite care already tried', 'Questions about whether further evaluation is needed'],
    planning: 'The consultation looks at your symptoms, movement, health history and any previous investigations. Your surgeon can explain what the findings may mean and whether continued non-surgical care, further assessment or a discussion about replacement is appropriate.',
    steps: ['Talk through symptoms, goals and relevant history', 'Review movement and any reports you bring', 'Discuss possible care paths and questions about surgery', 'Plan suitable follow-up with your clinician'],
    faqs: [['Does hip pain always mean I need a replacement?', 'No. Hip pain has different possible causes. A clinician evaluates your symptoms and findings before discussing suitable options.'], ['Can I bring previous scans?', 'Yes. Relevant imaging reports, prescriptions and a list of questions can help make the visit more useful.']],
    sources: [orthopedicSources[1]]
  },
  'fracture-management': {
    overview: 'A fracture is a break in a bone. Fracture management begins with understanding the injury, examining the affected area and reviewing appropriate imaging. The care plan depends on the bone involved, the fracture pattern, your overall health and other clinical findings.',
    signals: ['A recent injury with pain, swelling or difficulty using the affected limb', 'A suspected or confirmed fracture that needs orthopaedic review', 'Questions about an existing fracture plan or follow-up', 'A change in symptoms after an injury or treatment'],
    planning: 'Bring any emergency notes, X-rays, scans or treatment records you have. The orthopaedic team can review the injury and explain the next steps. If an injury is severe or there is an immediate emergency, seek urgent medical care rather than waiting for a routine appointment.',
    steps: ['Share how and when the injury occurred', 'Review examination findings and available imaging', 'Discuss the recommended care plan and follow-up', 'Ask what changes should prompt you to contact the care team'],
    faqs: [['What should I bring to a fracture consultation?', 'Bring available imaging, discharge notes, medication details and information about any treatment already provided.'], ['Can an online description determine the type of fracture?', 'No. Diagnosis and treatment planning require clinical assessment and may require imaging.']],
    sources: []
  },
  'joint-pain-relief': {
    overview: 'Joint pain can have different causes, and the right next step depends on where it occurs, how it began and how it affects movement. A consultation with an orthopaedic specialist can help review your concerns and discuss whether examination, imaging or another care option may be useful.',
    signals: ['Pain that persists or returns', 'Stiffness, swelling or reduced range of movement', 'Discomfort that affects work, sleep or daily tasks', 'Symptoms following an injury or a change in activity'],
    planning: 'Your doctor will ask about the location and timing of pain, relevant health history and care you have already tried. This helps guide a discussion about possible causes and appropriate next steps without assuming that every joint problem needs surgery.',
    steps: ['Describe the location, timing and pattern of symptoms', 'Discuss injuries, medical history and previous care', 'Review examination findings and any reports', 'Agree on whether follow-up or further evaluation is useful'],
    faqs: [['Should I wait for joint pain to become severe?', 'If pain persists, worsens or limits normal activity, you can arrange an assessment to discuss what may be causing it.'], ['Will every joint pain visit include imaging?', 'Not necessarily. Your clinician decides whether imaging or other evaluation is appropriate for your symptoms.']],
    sources: []
  },
  arthroscopy: {
    overview: 'Arthroscopy is a surgical technique that uses a small camera and instruments introduced through small incisions to view and, in selected cases, treat structures inside a joint. Whether it is useful depends on the specific joint problem and clinical findings; it is not appropriate for every source of joint pain.',
    signals: ['A joint problem that has not settled with the care already tried', 'Pain, catching or movement concerns after an injury', 'A known or suspected soft-tissue or cartilage problem', 'Questions about whether arthroscopy or another option is suitable'],
    planning: 'The specialist reviews the history of your symptoms, examination findings and any relevant imaging. If a procedure is discussed, ask what it is intended to address, what alternatives exist and what recovery and follow-up may involve in your specific case.',
    steps: ['Review symptoms, injury history and goals', 'Discuss examination and imaging findings', 'Compare appropriate non-surgical and procedural options', 'Review individual preparation, recovery and follow-up questions'],
    faqs: [['Is arthroscopy suitable for all joint pain?', 'No. It is used for selected joint problems. A specialist needs to identify the likely cause and discuss whether a procedure could address it.'], ['How long is recovery?', 'Recovery varies with the joint and the procedure performed. Your treating team should give guidance specific to your plan.']],
    sources: [['Knee arthroscopy — AAOS OrthoInfo', 'https://orthoinfo.aaos.org/en/treatment/knee-arthroscopy/']]
  },
  'orthopedic-consultation': {
    overview: 'An orthopaedic consultation is a focused visit to discuss concerns involving bones, joints, muscles or movement. It gives you time to share what has changed, review relevant health history and understand whether further assessment or a treatment discussion may help.',
    signals: ['Bone, joint or mobility concerns', 'Pain or stiffness affecting usual activities', 'A recent injury or a question about previous findings', 'A second opinion or help understanding possible next steps'],
    planning: 'There is no need to know the diagnosis before booking. Bring a short note about your symptoms, medicines and relevant reports if available. Your doctor can explain what can be addressed in the visit and whether follow-up is needed.',
    steps: ['Share your main concern and what you hope to understand', 'Discuss health history, medicines and previous care', 'Review examination findings and relevant reports', 'Clarify options, follow-up and any remaining questions'],
    faqs: [['Do I need a referral?', 'Contact the clinic if you are unsure what to bring or whether a referral is needed for your visit.'], ['Should I bring imaging reports?', 'Bring relevant reports or images that you already have; your doctor can advise whether more evaluation is needed.']],
    sources: []
  },
  'ivf-treatment': {
    overview: 'In vitro fertilisation (IVF) is a fertility treatment in which eggs and sperm are brought together in a laboratory, and an embryo may then be transferred to the uterus. Whether IVF is an appropriate option depends on a fertility assessment, individual circumstances and an informed discussion with the specialist.',
    signals: ['You would like to understand fertility treatment options', 'You have had previous fertility evaluation or treatment', 'You have questions about IVF or a prior cycle', 'You want to discuss next steps with a fertility specialist'],
    planning: 'A fertility consultation reviews your goals, relevant medical and reproductive history, previous test results and any treatment so far. The specialist can explain which evaluation may be appropriate and discuss options, limitations and questions before a treatment decision is made.',
    steps: ['Share your fertility goals and relevant history', 'Review available reports and previous treatment', 'Discuss whether further evaluation is useful', 'Talk through options and individual next steps with the specialist'],
    faqs: [['Does everyone who has difficulty conceiving need IVF?', 'No. Fertility care is individual. A specialist considers relevant history and evaluation before discussing possible options.'], ['Should both partners attend?', 'If possible, bring relevant information for both partners. The specialist can advise what evaluation is appropriate.']],
    sources: [...fertilitySources, ['IVF patient information — ASRM/ReproductiveFacts', 'https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/']]
  },
  'iui-treatment': {
    overview: 'Intrauterine insemination (IUI) places prepared sperm into the uterus around the time of ovulation. It may be considered for some fertility situations, but it is not suitable for everyone. The specialist explains whether it fits your evaluation and what other options may be relevant.',
    signals: ['You want to understand whether IUI is an option', 'You have questions about timing or a previous IUI cycle', 'You would like to review fertility investigations or treatment', 'You want to discuss alternatives with a fertility specialist'],
    planning: 'The discussion can include your fertility history, relevant test results and whether cycle monitoring or other evaluation should be considered. Your clinician can explain the process, potential limitations and individual considerations before you decide.',
    steps: ['Discuss goals and prior fertility care', 'Review relevant reports and evaluation', 'Ask how timing and monitoring apply to your case', 'Review alternatives and next steps with the specialist'],
    faqs: [['Is IUI right for every person or couple?', 'No. Its suitability depends on the cause of fertility concerns and other individual factors. A specialist can discuss options after evaluation.'], ['Can I bring records from a previous cycle?', 'Yes. Previous reports and treatment details can help your doctor understand what has already been considered.']],
    sources: [['Intrauterine insemination (IUI) — ASRM/ReproductiveFacts', 'https://www.reproductivefacts.org/news-and-publications/patient-fact-sheets-and-booklets/documents/fact-sheets-and-info-booklets/intrauterine-insemination-iui/'], fertilitySources[0]]
  },
  'infertility-care': {
    overview: 'Infertility care begins with listening to your concerns and understanding relevant reproductive and medical history. Evaluation may involve one or both partners and is guided by individual circumstances. The aim of a consultation is to discuss possible causes and appropriate options, not to assume a single path for everyone.',
    signals: ['You have questions about difficulty conceiving', 'You have irregular cycles or a known reproductive health concern', 'You have experienced pregnancy loss or previous fertility treatment', 'You want help understanding test results or possible next steps'],
    planning: 'Bring any previous reports, medication details and a timeline of prior evaluation or treatment if available. The specialist can explain what additional information may help and which options are relevant to your situation.',
    steps: ['Discuss goals and relevant health history', 'Review previous tests and treatment, if any', 'Consider whether evaluation of both partners is appropriate', 'Discuss options and a follow-up plan'],
    faqs: [['When should someone seek a fertility evaluation?', 'Timing depends on age, medical history and individual circumstances. A specialist can help you decide when evaluation is appropriate.'], ['Does infertility care always involve treatment?', 'No. A visit can help explain findings, answer questions and discuss whether any next step is needed.']],
    sources: fertilitySources
  },
  'fertility-evaluation': {
    overview: 'A fertility evaluation is a structured review of relevant reproductive history and test results to understand factors that may affect conception. Depending on the person, evaluation can consider ovulation, the reproductive tract and sperm health. The specialist selects tests based on individual history rather than using the same panel for everyone.',
    signals: ['You want to understand fertility before choosing a treatment', 'You have previous reports that need explanation', 'You have a known health concern that may affect fertility', 'You are planning or considering fertility care'],
    planning: 'Share relevant history, cycle information, medicines and previous reports. The specialist can explain what is already known, what remains uncertain and which tests, if any, are suitable to consider next.',
    steps: ['Review goals and medical or reproductive history', 'Discuss available reports and relevant prior care', 'Identify whether targeted evaluation may help', 'Explain findings and possible next steps'],
    faqs: [['Does a fertility evaluation include the same tests for everyone?', 'No. Evaluation is tailored to history and clinical findings, and may include assessment of both partners.'], ['Can I get a fertility result from one test?', 'A single test may not provide a complete picture. Your specialist interprets results alongside history and other relevant findings.']],
    sources: [fertilitySources[0]]
  },
  'pregnancy-care': {
    overview: 'Pregnancy care provides a place to discuss your health, questions and changing needs during pregnancy with an obstetric and gynaecology specialist. Dr. Simrandeep Kaur’s published profile includes high-risk pregnancy management. The schedule and investigations for care are determined by your clinician for your circumstances.',
    signals: ['You are seeking an obstetric consultation or ongoing pregnancy guidance', 'You have questions about a pregnancy or previous pregnancy history', 'You have an existing health concern to discuss during pregnancy', 'You would like a specialist to review reports or a care plan'],
    planning: 'Bring available pregnancy records, current medicines and information about relevant health conditions. Contact your clinician promptly about urgent or concerning symptoms; this page is not an emergency service.',
    steps: ['Discuss your pregnancy history and current questions', 'Review available records and relevant health conditions', 'Ask which checks or follow-up are appropriate for you', 'Confirm how to contact your care team if concerns arise'],
    faqs: [['What should I bring to a pregnancy consultation?', 'Bring available records, test reports, medicine details and questions you would like to discuss.'], ['Can this page tell me what tests I need?', 'No. Your clinician will advise which investigations and follow-up are appropriate for your pregnancy.']],
    sources: []
  },
  'womens-health': {
    overview: 'Women’s health consultations offer a confidential setting to discuss gynaecological concerns, menstrual changes, PCOS-related questions and reproductive health. Dr. Simrandeep Kaur’s profile lists PCOS and ovarian dysfunction, infertility care, laparoscopy and hysteroscopy among her areas of care.',
    signals: ['A menstrual or gynaecological concern you want assessed', 'Questions about PCOS or ovarian dysfunction', 'A reproductive health concern or previous test result', 'Questions about a gynaecological procedure or follow-up'],
    planning: 'Your appointment can begin with the concern that matters most to you. Share relevant history, medicines and reports if you have them. Tests or procedures are considered only when appropriate to your individual assessment.',
    steps: ['Talk through your concerns and health history', 'Review relevant reports and previous care', 'Discuss whether examination or further evaluation is appropriate', 'Agree on a follow-up plan or next step'],
    faqs: [['Can I discuss PCOS during this appointment?', 'Yes. The doctor profile lists PCOS and ovarian dysfunction among her areas of care. Individual assessment is needed to discuss your situation.'], ['Are procedures performed for every gynaecological concern?', 'No. Procedures such as laparoscopy or hysteroscopy are considered only for selected indications after a clinical discussion.']],
    sources: [['Polycystic ovary syndrome — ACOG', 'https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos'], ['Laparoscopy — ACOG', 'https://www.acog.org/womens-health/faqs/laparoscopy'], ['Hysteroscopy — ACOG', 'https://www.acog.org/womens-health/faqs/hysteroscopy']]
  }
};

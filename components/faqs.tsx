import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "What is the R&D Tax Incentive?",
      answer:
        "A government program offering tax offsets for eligible R&D activities. It's designed to boost innovation in Australian businesses. Want to know if your activities qualify? Let's chat.",
    },
    {
      question: "What R&D activities are eligible for the tax incentive?",
      answer:
        "Activities involving experimentation to generate new knowledge. Think software development, engineering innovations, or scientific breakthroughs. Not sure if your work qualifies? We can help you find out.",
    },
    {
      question: "Who can claim the R&D Tax Incentive?",
      answer:
        "Companies incorporated in Australia conducting eligible R&D activities. Size doesn't matter, but your R&D must meet specific criteria. Curious if you're eligible? Reach out to us.",
    },
    {
      question: "When is the deadline for R&D Tax Incentive claims?",
      answer:
        "10 months after your financial year ends. For most companies, that's April 30th. Don't miss out – start your claim early. Want to ensure you meet the deadline? Let's get started now.",
    },
    {
      question: "How much can I claim through the R&D Tax Incentive?",
      answer:
        "Up to 43.5% of eligible R&D expenditure for companies with turnover under $20 million. Larger companies get a different rate. Wonder how much you could claim? Let's crunch the numbers together.",
    },
    {
      question: "What records do I need to keep for my R&D claim?",
      answer:
        "Detailed documentation of your R&D activities and expenses. We can guide you on setting up an efficient record-keeping system. Need help getting organized? We've got you covered.",
    },
    {
      question: "How can I maximize my R&D Tax Incentive claim?",
      answer:
        "By understanding what qualifies and keeping thorough records. Our experts can help you identify all eligible activities and expenses. Ready to optimise your claim? Let's connect and explore your potential.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-12 md:pb-20">

          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Questions we often get
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
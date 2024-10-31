// src/pages/faq/faq-page.tsx
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQPage = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "Do I need a partner to attend?",
          answer: "No, you don't need a partner! We encourage everyone to rotate partners during lessons, which helps improve your dancing and makes it more social."
        },
        {
          question: "What should I wear?",
          answer: "Comfortable clothing that allows you to move freely. For footwear, bring dance shoes or clean, smooth-soled shoes that won't mark the floor."
        },
        {
          question: "Is there a cost to attend?",
          answer: "Our regular Tuesday night events are completely FREE! Special workshops or events may have associated costs."
        }
      ]
    },
    {
      category: "Classes & Learning",
      questions: [
        {
          question: "What time do lessons start?",
          answer: "Lessons start at 7:30 PM every Tuesday, followed by social dancing from 8:30 PM to 10:00 PM."
        },
        {
          question: "What dance styles do you teach?",
          answer: "We teach a variety of styles including Country Swing, West Coast Swing, Salsa, Bachata, Waltz, and more. Styles rotate monthly."
        },
        {
          question: "I'm a complete beginner. Can I still come?",
          answer: "Absolutely! Our lessons are structured to accommodate beginners while still providing value to more experienced dancers."
        }
      ]
    },
    {
      category: "Venue & Location",
      questions: [
        {
          question: "Where are you located?",
          answer: "We dance at 7500 S 700 E, Midvale, UT 84047. The venue is an LDS Church building with plenty of free parking."
        },
        {
          question: "Is parking available?",
          answer: "Yes, there is ample free parking available in the church parking lot."
        },
        {
          question: "What facilities are available?",
          answer: "The venue has restrooms and water fountains. We dance in the cultural hall (gym) which has a smooth floor perfect for dancing."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
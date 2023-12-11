export async function getAllProductsFromJson() {
  try {
    const response = await fetch("http://localhost:3002/api/get/all/item/1", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "include", // include, *same-origin, omit

      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });

    const result = await response.json();
    console.log(" hello --- ");
    console.log(" hello --- " + JSON.stringify(result[0]));

    return result;
  } catch (error) {
    return {};

    console.error("Error:", error);
  }

  // const products = [
  //   {
  //     slug: "novice-abs-blitz",
  //     title: "Novice Abs Blitz",
  //     description: "Carve Strong Core, Unveil Chiseled Six-Packs.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "1.webp",
  //     images: {
  //       0: "1.webp",
  //       1: "2.webp",
  //       2: "3.webp",
  //     },
  //   },
  //   {
  //     slug: "novice-arms-blitz",
  //     title: "Novice Arms Blitz",
  //     description: "Build Strong Arms from Scratch.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "4.webp",
  //     images: {
  //       0: "4.webp",
  //       1: "5.webp",
  //       2: "6.webp",
  //     },
  //   },
  //   {
  //     slug: "novice-back-blitz",
  //     title: "Novice Back Blitz",
  //     description: "Forge a Powerful, Muscular Back.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "7.webp",
  //     images: {
  //       0: "7.webp",
  //       1: "8.webp",
  //       2: "9.webp",
  //     },
  //   },
  //   {
  //     slug: "novice-shoulder-blitz",
  //     title: "Novice Shoulder B.",
  //     description: "Unleash 3D-Looking Cannonball Shoulders.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "10.webp",
  //     images: {
  //       0: "10.webp",
  //       1: "11.webp",
  //       2: "12.webp",
  //     },
  //   },
  //   {
  //     slug: "novice-chest-blitz",
  //     title: "Novice Chest Blitz",
  //     description: "Carve a Strong and Sculpted Chest.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "13.webp",
  //     images: {
  //       0: "13.webp",
  //       1: "14.webp",
  //       2: "15.webp",
  //     },
  //   },
  //   {
  //     slug: "novice-leg-blitz",
  //     title: "Novice Leg Blitz",
  //     description: "Build Powerful Legs and achieve godly Strength.",
  //     price: "9.99",
  //     rupess: "799.00",
  //     mainImage: "16.webp",
  //     images: {
  //       0: "16.webp",
  //       1: "17.webp",
  //       2: "18.webp",
  //     },
  //   },
  // ];
}

export async function fetchAllFAQData() {
  try {
    const response = await fetch("http://localhost:3002/api/get/all/faq/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "include", // include, *same-origin, omit

      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });

    const result = await response.json();
    console.log(" here --- ");
    console.log(" here --- " + JSON.stringify(result[0]));
    return result;
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
}

export const faqContent1 = [
  {
    title: {
      id: "1",
      question:
        "What fitness level do I need to be at to start these workout plans?",
    },
    content: {
      id: "1",
      answer:
        "These workout plans are specifically designed for beginners who are just starting their fitness journey. They are suitable for individuals who have never been to the gym before or those who are new to exercise.",
    },
  },
  {
    title: {
      id: "2",
      question: "How long are the workout sessions for each plan?",
    },
    content: {
      id: "2",
      answer:
        "The workout sessions for each plan typically range from 45 minutes to an hour. It is recommended to allocate an additional 10 minutes for a warm-up before starting the workout.",
    },
  },
  {
    title: {
      id: "3",
      question: "Can I do these workouts at home or do I need access to a gym?",
    },
    content: {
      id: "3",
      answer:
        "While it is possible to perform these workouts at home, they are primarily designed to be done in a gym setting. The plans include exercises that utilize gym equipment, which can enhance the effectiveness of the workouts. However, modifications can be made to adapt the exercises for home settings.",
    },
  },
  {
    title: {
      id: "4",
      question:
        "Are the workout plans suitable for individuals with any specific health conditions or injuries?",
    },
    content: {
      id: "4",
      answer:
        "Individuals with specific health conditions or injuries should exercise caution and consider consulting a personal trainer or healthcare professional before purchasing these plans. It is important to assess whether the workouts are appropriate for their individual circumstances.",
    },
  },
  {
    title: {
      id: "5",
      question:
        "Can I customize the workout plans to fit my individual goals and preferences?",
    },
    content: {
      id: "5",
      answer:
        "While there is room for customization, it is recommended that individuals have a good understanding of fitness and muscle function before making significant modifications to the plans. The workouts are carefully designed to target specific muscle groups and provide a balanced training regimen for beginners.",
    },
  },
  {
    title: {
      id: "6",
      question:
        "How soon can I expect to see results from following these workout plans?",
    },
    content: {
      id: "6",
      answer:
        "Results may vary depending on various factors such as consistency, effort, and individual differences. With adherence to the workout plans and a proper diet, individuals can expect to see noticeable improvements in terms of strength and muscle hypertrophy within 60-90 days.",
    },
  },
  {
    title: {
      id: "7",
      question:
        "Are there any dietary recommendations or guidelines provided along with the workout plans?",
    },
    content: {
      id: "7",
      answer:
        "These workout plans focus solely on the exercise component and do not include specific dietary recommendations or guidelines. It is recommended that individuals seek advice from a nutritionist or dietitian for tailored dietary guidance to support their fitness goals.",
    },
  },
  {
    title: {
      id: "8",
      question: "What equipment do I need for the workout plans?",
    },
    content: {
      id: "8",
      answer:
        "The workout plans include instructions on the equipment to be used, along with detailed explanations of how and why to use each piece of equipment. While specialized or advanced equipment is not required, the plans utilize common gym equipment to target specific muscle groups effectively.",
    },
  },
  {
    title: {
      id: "9",
      question: "Are there any age restrictions for these workout plans?",
    },
    content: {
      id: "9",
      answer:
        "These workout plans are suitable for individuals aged 12 and above. They are designed to accommodate individuals of any gender (male/female) who are beginners in their fitness journey.",
    },
  },
  {
    title: {
      id: "10",
      question:
        "Can I continue using these workout plans after completing the beginner level?",
    },
    content: {
      id: "10",
      answer:
        "These workout plans are specifically designed for beginner-level gym-goers or fitness enthusiasts. While individuals may benefit from repeating the plans to reinforce their foundation, it is recommended to progress to more advanced training programs as they gain experience and fitness level increases.",
    },
  },

  {
    title: {
      id: "11",
      question:
        "How do I access and download the workout plans after purchasing?",
    },
    content: {
      id: "11",
      answer:
        "Upon successful purchase, Regime Fit will promptly deliver the purchased workout plan PDF to the email address provided by the buyer during the payment process. You can expect to receive the comprehensive workout plan within 12 hours of your purchase. Should you have any inquiries regarding the purchased plan or require pre-purchase assistance, please don't hesitate to reach out to our dedicated support team at Support@regimefit.com.",
    },
  },
];

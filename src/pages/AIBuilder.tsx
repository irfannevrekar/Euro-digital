import ProductPage from "./ProductPage";

function AIBuilder() {
  return (
    <ProductPage
      id="emotionai"
      title="Emotion AI"
      description="Connect with customers in a way that feels personal, not robotic. Emotion AI senses tone and intent as conversations unfold—so every reply feels timely, empathetic, and built to earn trust."
      image="/servicesImages/emotion_ai.png"
      video="https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f"
      overlayTitle="Ready to Build Your AI Assistant?"
      showFAQs
      features={[
        "Run emotion-aware conversations that adapt in real time—responding to how customers feel, not just what they type",
        "Embed an AI voice widget on your website for natural, human-like dialogue in Gujarati, Hindi, Marathi, and English—with authentic regional accents",
        "Automate outreach and support with intelligent AI calling that handles live back-and-forth, far beyond fixed scripts",
        "Increase engagement, strengthen customer experience, and drive more conversions through interactions that truly feel human",
      ]}
      detailedDescription="From your website to the phone line, Emotion AI helps you meet customers where they are—with language they understand, tone they trust, and conversations that move them closer to a yes."
      plans={[
        {
          name: "Launch",
          price: "$199",
          description: "For one AI assistant or automation flow.",
          features: ["1 assistant", "Knowledge setup", "Basic workflow", "Email support"],
        },
        {
          name: "Scale",
          price: "$499",
          description: "For teams building multiple AI workflows.",
          highlighted: true,
          features: ["5 assistants", "Advanced workflows", "CRM integration", "Priority support"],
        },
        {
          name: "Custom",
          price: "Custom",
          description: "For advanced AI systems and private workflows.",
          features: ["Custom agents", "API access", "Private knowledge base", "Dedicated support"],
        },
      ]}
    />
  );
}

export default AIBuilder;

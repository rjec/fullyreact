import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  // Dummy data for features
  const features = [
    {
      title: "Rapid Results",
      description: "Get your lab test results quickly and efficiently.",
      icon: "⚡️", // Replace with actual icons
    },
    {
      title: "Accurate Testing",
      description: "Utilizing cutting-edge technology for precise results.",
      icon: "🔬",
    },
    {
      title: "Convenient Locations",
      description: "Find a lab near you with ease.",
      icon: "📍",
    },
  ];

  return (
    <div className="font-sans bg-secondary-bg text-primary-text antialiased">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark-blue dark:text-brand-teal leading-tight mb-6 animate-fadeIn">
          Your Partner for Reliable Lab Testing Solutions
        </h1>
        <p className="text-xl md:text-2xl text-secondary-text mb-10 animate-fadeIn delay-150">
          Streamlined and accurate laboratory services for all your needs.
        </p>
        <button className="bg-brand-medium-blue hover:bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out animate-pulse_background_brand">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark-blue dark:text-brand-teal mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-primary-bg p-6 rounded-lg shadow-md border border-border-color animate-fadeIn" style={{ animationDelay: `${index * 100 + 300}ms` }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-brand-dark-blue dark:text-brand-teal mb-3">{feature.title}</h3>
              <p className="text-secondary-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-brand-dark-blue dark:bg-slate-900 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
        <p className="text-xl mb-10">Contact us today to learn more about our services.</p>
        <button className="bg-brand-orange hover:bg-brand-medium-blue text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">Contact Us</button>
      </section>
    </div>
  );
}

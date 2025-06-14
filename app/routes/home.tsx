import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ textAlign: 'center', mb: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            Your Partner for Reliable Lab Testing Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Streamlined and accurate laboratory services for all your needs.
          </Typography>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.icon} {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
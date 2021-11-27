import Layout from "@/components/layout";
import { API_URL } from "@/config/index";

export default function EventPage({ event }) {
  return (
    <Layout>
      <h2>{event.name}</h2>
    </Layout>
  );
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events/${slug}`);
  const event = await res.json();
  return {
    props: { event },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((item) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: false };
}

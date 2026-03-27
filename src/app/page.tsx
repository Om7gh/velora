import { Header } from '@/Components/Layout/Home/Header';
import { Button } from '@/Components/ui/Button';

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-background py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build Your Portfolio{' '}
            <span className="bg-linear-120 from-primary via-secondary to-accent bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>

          <p className="text-foreground mt-6 text-lg max-w-2xl mx-auto">
            Velora turns your information into a stunning personal portfolio. No
            coding. No design skills. Just results.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Button type="primary" label="get Started"></Button>
            <Button type="secondary" label="view demo"></Button>
          </div>
        </div>
      </section>
    </>
  );
}

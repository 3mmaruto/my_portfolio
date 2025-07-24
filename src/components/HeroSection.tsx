// src/components/HeroSection.tsx
import "./HeroSection.css"; // ملف ستايل للأنيميشن والخلفية

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-8">
      <div className="matrix-animation w-full" />

      <div className="hero-content max-w-2xl px-4">
        <h1 className="text-3xl font-bold mb-4">مرحبًا، أنا سوريانا 👩‍💻</h1>
        <p className="mb-4">مساعدة ذكية  يمكنها مساعدتك في:</p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>التواصل مع عمّار</li>
          <li>استعراض المشاريع</li>
          <li>معرفة المزيد عن عمّار</li>
          <li>او اي استفسار آخر</li>
        </ul>
        <p>فقط اسألني 🤖</p>
      </div>
    </section>
  );
};

export default HeroSection;

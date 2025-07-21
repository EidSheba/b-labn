import React from 'react';
import './about.css';

const arabicText = `من نحن – قصة بلبُن
في قلب شوارع مصر المليئة بالذكريات والدفا، بدأت حكاية بلبُن...
حلم بسيط انطلق من حبنا للحلويات الشرقية اللي كبرنا عليها، زي الرز بلبن، المهلبية، والكنافة، وقررنا نقدّمها بطريقة جديدة تدمج بين الطعم الأصيل واللمسة العصرية.

من أول يوم، كان هدفنا إن كل طبق يقدّم تجربة متكاملة: من الجودة العالية، للتقديم الراقي، لذكريات الطفولة اللي بترجعلك أول ما تدوق أول معلقة.

وبفضل حب الناس لينا، اتحول الفرع الصغير لحلم كبير بنعيشه كل يوم.
لدينا فروع في مصر - السعودية - الإمارات - الجزائر - المغرب، وبنكبر كل يوم علشان نوصل طعمنا الأصيل لكل عاشق للحلويات الشرقية.

بلبُن مش مجرد محل حلويات...
بلبُن هو حكاية طعم، ودفا، وحنين... بنعيشه معاكم كل يوم`;

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <h2 className="about-us-heading text-center mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <img src="/images/about.jpg" alt="About" className="about-img" />
          </div>
          <div className="col-md-6">
            <h2 className="about-title mb-4 text-end">من نحن – قصة بلبُن</h2>
            <p className="about-text text-end" dir="rtl">{arabicText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
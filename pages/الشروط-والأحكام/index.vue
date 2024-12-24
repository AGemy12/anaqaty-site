<template>
  <section class="terms-conditions">
    <h1 class="terms-conditions__title">الشروط والأحكام لموقع أناقتي</h1>
    <p>
      مرحباً بك في موقع "أناقتي". باستخدامك لهذا الموقع، فإنك توافق على الشروط
      والأحكام الموضحة أدناه. نوصيك بقراءة هذه الشروط بعناية.
    </p>

    <div class="terms-conditions__section">
      <h2>1. محتوى الموقع</h2>
      <p>
        يتم تقديم محتوى موقع "أناقتي" لأغراض إعلامية فقط. لا نضمن دقة أو كمال
        المحتوى، وقد يتم تحديثه أو تعديله في أي وقت دون إشعار مسبق.
      </p>
    </div>

    <div class="terms-conditions__section">
      <h2>2. حقوق الملكية الفكرية</h2>
      <p>
        جميع الحقوق المتعلقة بالمحتوى والنصوص والصور والرسومات ملك لموقع
        "أناقتي". لا يُسمح بإعادة نشر أو توزيع أي جزء من الموقع دون إذن كتابي
        مسبق.
      </p>
    </div>

    <div class="terms-conditions__section">
      <h2>3. استخدام الموقع</h2>
      <p>
        يُمنع استخدام موقع "أناقتي" لأي أغراض غير قانونية أو قد تسبب ضررًا
        للموقع أو للمستخدمين الآخرين. يجب عليك الالتزام بعدم إساءة استخدام
        المحتوى أو محاولة الوصول غير المصرح به إلى الموقع.
      </p>
    </div>

    <div class="terms-conditions__section">
      <h2>4. حدود المسؤولية</h2>
      <p>
        لا يتحمل موقع "أناقتي" أي مسؤولية عن أي أضرار تنشأ عن استخدامك للموقع أو
        الاعتماد على محتواه. يتم توفير الموقع والمحتوى "كما هو" دون أي ضمانات.
      </p>
    </div>

    <div class="terms-conditions__section">
      <h2>5. التعديلات على الشروط والأحكام</h2>
      <p>
        نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. يُنصح بمراجعة هذه
        الصفحة بانتظام للتأكد من التزامك بالشروط الأحدث.
      </p>
    </div>

    <div class="terms-conditions__section">
      <h2>اتصل بنا</h2>
      <p>
        لأي استفسارات حول الشروط والأحكام، يمكنك التواصل معنا
        <nuxt-link
          to="https://api.whatsapp.com/send?phone=905378753852"
          target="_blank"
        >
          عبر الواتساب</nuxt-link
        >.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.terms-conditions {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: var(--dark);
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    text-align: justify;
  }

  &__section {
    margin: 1rem 0;

    h2 {
      font-size: 1.1rem;
      color: var(--dark);
      margin: 0.5rem 0;
    }

    p {
      font-size: 1rem;
      color: var(--dark);
      margin-bottom: 0.75rem;
      line-height: 1.8;
      a {
        color: blue;
        text-decoration: underline;
      }
    }
  }
}
</style>

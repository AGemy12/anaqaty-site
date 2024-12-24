<template>
  <section class="privacy-policy">
    <h1 class="privacy-policy__title">سياسة الخصوصية لموقع أناقتي</h1>
    <p>
      مرحباً بك في موقع "أناقتي". نحن ملتزمون بحماية خصوصيتك وضمان سرية بياناتك.
      توضح هذه السياسة كيفية جمع واستخدام المعلومات عند تصفحك لموقعنا.
    </p>

    <div class="privacy-policy__section">
      <h2>1. جمع المعلومات</h2>
      <p>
        لا يتطلب موقع "أناقتي" تسجيل الدخول أو تقديم أي معلومات شخصية من الزوار.
      </p>
      <p>
        يتم جمع بعض المعلومات بشكل تلقائي لأغراض تحليلية فقط، مثل عنوان IP، ونوع
        المتصفح، والصفحات التي تمت زيارتها. تُستخدم هذه البيانات لفهم كيفية
        تفاعل الزوار مع الموقع بهدف تحسين تجربة المستخدم.
      </p>
    </div>

    <div class="privacy-policy__section">
      <h2>2. استخدام الملفات المؤقتة (الكوكيز)</h2>
      <p>
        قد يستخدم موقع "أناقتي" ملفات تعريف الارتباط (Cookies) لتحسين تجربتك في
        التصفح. تتيح لنا ملفات تعريف الارتباط فهم تفضيلاتك وتقديم محتوى أكثر
        ملاءمة.
      </p>
      <p>
        يمكنك اختيار تعطيل ملفات تعريف الارتباط من إعدادات المتصفح الخاص بك،
        ولكن قد يؤثر ذلك على بعض وظائف الموقع.
      </p>
    </div>

    <div class="privacy-policy__section">
      <h2>3. الروابط الخارجية</h2>
      <p>
        قد يحتوي موقع "أناقتي" على روابط لمواقع أخرى. نحن غير مسؤولين عن سياسات
        الخصوصية لهذه المواقع الخارجية، ونشجعك على مراجعة سياسات الخصوصية الخاصة
        بها عند زيارتها.
      </p>
    </div>

    <div class="privacy-policy__section">
      <h2>4. التحديثات على سياسة الخصوصية</h2>
      <p>
        قد يتم تحديث سياسة الخصوصية من حين لآخر. نوصي بمراجعة هذه الصفحة بانتظام
        لمعرفة أي تغييرات قد تطرأ.
      </p>
    </div>

    <div class="privacy-policy__section">
      <h2>اتصل بنا</h2>
      <p>
        لأي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا
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
.privacy-policy {
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
    text-align: justify;

    h2 {
      font-size: 1.1rem;
      color: var(--dark);
      margin: 0.5rem 0;
    }

    p {
      font-size: 1rem;
      color: var(--dark);
      margin-bottom: 0.75rem;
      line-height: 2;
      text-align: justify;
      a {
        text-decoration: underline;
        color: blue;
      }
    }
  }
}
</style>

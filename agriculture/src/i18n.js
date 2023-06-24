import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "IoT انواع دستگاه های": "IOT Devices",
      "پر فروش ترین محصولات ما":"Our best selling products",
      "مشاهده محصولات":"View products",
      "تومان":"Toman",
      "نام تامین کننده کالا":"Name of the supplier",
      "انواع دستگاه های IoT":"Types of IoT devices",
      "جدیدترین محصولات ما":"Our newest products",
      "ارائه ی انواع مشاوره در حوزه کشاورزی":"Providing all kinds of advice in the field of agriculture",
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ":"Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary",
      "مشاوره تصویری":"Video consultation",
      "مشاوره صوتی":"Voice advice",
      "مشاوره متنی":"Text advice",
      "دریافت مشاوره":"Get advice",
      "برترین مشاوران ما":"Our top consultants",
      "اخبار و مقالات":"News and articles",
      "ادامه مطلب":"Read more",
      "بیشتر بدانیم ...":"... know more",
      "کشاورزی هوشمند":"Smart farming",
      "شعار سایت اینجا قرار میگیرد!":"The slogan of the site is placed here!",
      "ثبت نام کنید":"register",
      "شماره تلفن همراه":"Mobile phone number",
      "مرا به خاطر بسپار ":"remember me",
      "حساب کاربری ندارید؟":"Don't have an account?",
      "ورود به حساب کاربری":"Login to account",
      "ایجاد رمز جدید":"Create a new password",
      "رمز عبور خود را فراموش کردید؟":"Forgot your password?",
      "کلمه عبور":"Password",
      "وارد شوید":"Enter",
      "حساب کاربری دارید ؟":"Do you have an account?",
      "ثبت نام ":"register",
      "ایجاد حساب کاربری":"Create an account",
      "اینجانب":"Me",
      "قوانین و مقررات":"Terms and Conditions",
      "را مطالعه کرده و آن ها را پذیرفته ام.":"I have read and accepted them.",
      "تکمیل ثبت نام":"Complete registration",
      "نام خانوادگی":"Family",
      "رمز عبور":"Password",
      "تکرار رمز عبور":"repeat the password",
      "ثبت نام به عنوان مشاور":"Register as a consultant",
      "کد تایید ارسال شده را وارد نمایید":"Enter the verification code sent",
      "تایید":"confirmation",
      "ورود":"log in",
      "فراموشی رمز عبور":"forget password"


  }
    
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ir", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
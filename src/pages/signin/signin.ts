
import signin from "./signin.tmpl";
import { Input } from "../../components/input";
import { Button } from "../../components/button"
import { Link } from "../../components/link";
import { Form } from "../../components/form";

// export function auth() {
//     const inputs = [
//         new Input({
//             name: "login",
//             label: "Логин",
//             type: "text",
//             error: "Неверный логин",
//             events: {
//                 blur: (event: Event) => {
//                     validation({event});
//                 },
//             }
//         }),

//         new Input({
//             name: "password",
//             label: "Пароль",
//             type: "password",
//             error: "Неверный пароль",
//             events: {
//                 blur: (event: Event) => {
//                     validation({event});
//                 }
//             }
//         })
//     ]


//   const button = new Button({
//     label: "Авторизоваться",
//     class: "login__btn"
//   });

//   const link = new Link({
//       label: "Нет аккаунта?",
//       href: "/signup",
//       class: "login__link"
//   });

//     const form = new Form({
//         inputs: inputs,
//         button: button,
        
//     }, {
//         events: {
//             submit: (event: Event) => {
//                 checkAndCollectData(event, "/selectChat");
//             }
//         }
//     });

//     const context = {
//         link: link.transformToString(),
//         form: form.transformToString(),
//     };

//     return template(context);
// }
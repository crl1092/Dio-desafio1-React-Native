export default function generatePasswd() {
  let password: string = "";
  let characteres: string =
    "QWERTYUIOPASDFFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm,.;?~^[]{}-+=1234567890,.+-*/!@#$%¨&";
  let passwdLenght = 8;
  for (let index = 0; index < passwdLenght; index++) {
    password += characteres.charAt(
      Math.floor(Math.random() * characteres.length),
    );
  }
  return password;
}

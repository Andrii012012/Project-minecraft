import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { urlUpdataPassword } from "../../../../configs/urls";
import { FormUpdataPassword } from "../../components/FormUpdataPassword/FormUpdataPassword";
import Protection from "../../components/Protection/Protection";
import { IData } from "../../../../interface/interface";

interface IProps {
  user: IData;
}

export default function Security(props: IProps): JSX.Element {
  let { user } = props;

  return (
    <div>
      <h2 className={`${styles.title} ${gStyles.sectionName}`}>
        Настройки безопасности
      </h2>
      <FormUpdataPassword
        url={urlUpdataPassword}
        id={user.id}
      />
      <Protection name={user.login} />
    </div>
  );
}

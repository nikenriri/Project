// Config
import { APP_INFO } from "../../config";

// Styles
import classStyles from "./index.module.css";

const CopyrightFooter = () => {
  return (
    <>
      <div className={classStyles.footerClass}>
        <p className={classStyles.textFooter}>
          © DDMove Sdn Bhd 2024. Copyright reserved.
        </p>
      </div>
    </>
  );
};

export default CopyrightFooter;

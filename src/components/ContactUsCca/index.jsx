import React from "react";

import { Text } from "components";

const ContactUsCca = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[19px] text-black-900 w-auto"
          size="txtPoppinsMedium19"
        >
          {props?.becomeatutortext}
        </Text>
        <Text
          className="text-[19px] text-black-900 w-auto"
          size="txtPoppinsMedium19"
        >
          {props?.subjectstext}
        </Text>
        <Text
          className="text-[19px] text-black-900 w-auto"
          size="txtPoppinsMedium19"
        >
          {props?.contacttext}
        </Text>
        <Text
          className="text-[19px] text-black-900 w-auto"
          size="txtPoppinsMedium19"
        >
          {props?.dashboardtext}
        </Text>
        <Text
          className="text-[19px] text-black-900 w-auto"
          size="txtPoppinsMedium19"
        >
          {props?.abouttext}
        </Text>
      </div>
    </>
  );
};

ContactUsCca.defaultProps = {
  becomeatutortext: "Become a Student",
  subjectstext: "Subjects",
  contacttext: "Contact",
  dashboardtext: "Dashboard",
  abouttext: "About",
};

export default ContactUsCca;

import React, { useEffect, useState } from "react";
import QuestionCircleOutline from "@ant-design/icons";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
import AntdIcon from "@ant-design/icons-react";
import {ThemeColors} from '../theme/theme'
import { getSecondaryColor } from "@ant-design/icons-react/lib/utils";
import { Icon } from "antd";

const useAntdIcon = (groupName, iconName) => {
  const [returnIcon, setReturnIcon] = useState(QuestionCircleOutline);
  useEffect(() => {
    if (null == iconName) {
      return;
    }
    import(`@ant-design/icons/lib/${groupName}/${iconName}.js`).then(
      ({ default: icon }) => {
        setReturnIcon(icon);
      }
    );
  }, [groupName, iconName]);

  return returnIcon;
};

const UDAntdIcon = ({ id, iconGroupName, icon: name, isTwoTone, ...props }) => {
  let ReturnIcon = useAntdIcon(iconGroupName, name);
  const [testColor, setTestColor] = useState(AntdIcon.getTwoToneColors());
  const [colorStorage, setColorStorage] = useState(
    JSON.parse(
      localStorage.getItem("http://localhost:1004/color.less:vars")
    )
  )

  useEffect(() => {
    console.log("testColor", testColor);
    console.log("colorStorage", colorStorage);
    console.log("AntdIcon.getTwoToneColors()", AntdIcon.getTwoToneColors());
  });

  console.log("ReturnIcon", ReturnIcon);

  const onClick = event => {
    props.hasCallback
      ? UniversalDashboard.publish("element-event", {
          type: "clientEvent",
          eventId: id + "onClick",
          eventName: "onClick",
          eventData: JSON.stringify(props)
        })
      : null;
  };

  const fontSize = {
    xs: 12,
    sm: 14,
    lg: 16,
    "2x": 18,
    "3x": 24,
    "4x": 32,
    "5x": 48,
    "6x": 64,
    "7x": 96,
    "8x": 128,
    "9x": 192,
    "10x": 256,
  };

  return (
    <AntdIcon
      type={ReturnIcon}
      style={{ fontSize: fontSize[props.size] }}
      {...AntdIcon.getTwoToneColors()}
      // primaryColor={testColor['@primaryColor']}
    />
  );
};

export default UDAntdIcon;

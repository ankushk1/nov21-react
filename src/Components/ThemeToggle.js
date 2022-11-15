import React from "react";
import { useTheme } from "../utils/CustomHooks";

const ThemeToggle = () => {
  const { theme, onThemeChange, renderButton } = useTheme();

  console.log(theme);
  return (
    <div>
      {renderButton()}
      <div
        className={`${
          theme === "light" ? "light-mode" : "dark-mode"
        } h-50 mt-3`}
        // style={
        //   theme === "light"
        //     ? { backgroundColor: "white", color: "black" }
        //     : { backgroundColor: "black", color: "white" }
        // }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum id
        omnis beatae blanditiis optio molestiae accusamus quam harum recusandae
        qui dolorum doloribus quod consectetur perferendis laboriosam ratione
        vel tempora eum, sapiente quo corporis, est iusto. Fugit pariatur rem,
        enim quaerat a odit omnis dicta quas ab consectetur aliquid accusamus
        consequatur et modi deserunt sed iure debitis nihil quo adipisci
        repellendus, aspernatur excepturi corrupti nostrum. Labore ipsam unde
        rem aut omnis dignissimos quod accusamus. Accusamus ipsum quo in
        dignissimos ratione consequatur expedita atque, eligendi ex iste totam
        consequuntur architecto, odio earum tempora quis, illo minima sed
        eveniet assumenda! Iure eveniet ex delectus a illo at asperiores quis
        neque officia maiores accusantium sunt, dolores officiis error dolor
        ipsa est cupiditate quas provident, assumenda rerum esse eligendi.
        Repudiandae inventore modi fugiat qui corporis aperiam atque voluptates
        aliquam doloremque eos. Quis placeat natus explicabo tempora suscipit
        ipsum fugiat cumque dolore iusto consequatur assumenda, veritatis harum
        deleniti obcaecati voluptatem mollitia quisquam! Maxime tempora culpa,
        non est earum quisquam laboriosam in animi placeat porro neque natus
        enim fugit repellat quos eum nam nobis commodi rerum ea doloribus? Magni
        nam corrupti aut, hic labore aperiam, temporibus placeat quos ratione,
        omnis laborum enim nulla ex dolorum consequuntur.
      </div>
    </div>
  );
};

export default ThemeToggle;

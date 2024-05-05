import { useEffect, useState } from "react";

const useWindowPosition = (id: string) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const offSetHeight = document.getElementById(id)?.offsetHeight;

      console.log(offSetHeight);
      if (offSetHeight && window.pageYOffset > offSetHeight * 0.7) {
        setAnimation(true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }
  }, [id]);

  return animation;
};

export default useWindowPosition;

// import { useLayoutEffect, useState } from "react";

// const useWindowPosition = (id: string) => {
//   const [animation, setAnimation] = useState(false);

//   useLayoutEffect(() => {
//     const updatePosition = () => {
//       const offSetHeight = window.document.getElementById(id)?.offsetHeight;
//       console.log(offSetHeight);
//       if (offSetHeight && window.pageYOffset > offSetHeight * 0.7) {
//         setAnimation(true);
//       }
//     };
//     window.addEventListener("scroll", updatePosition);
//     updatePosition();
//     return () => window.removeEventListener("scroll", updatePosition);
//   }, [id]);
//   return animation;
// };

// export default useWindowPosition;

// import { useEffect, useState } from "react";

// const useWindowPosition = (id: string) => {
//   const [animation, setAnimation] = useState(false);

//   useEffect(() => {
//     const updatePosition = () => {
//       const currentScrollPosition = window.pageYOffset;
//       if (
//         currentScrollPosition &&
//         window.pageYOffset > currentScrollPosition * 0.7
//       ) {
//         setAnimation(true);
//       }
//     };

//     window.addEventListener("scroll", updatePosition);

//     return () => window.removeEventListener("scroll", updatePosition);
//   }, []);

//   return animation;
// };

// export default useWindowPosition;

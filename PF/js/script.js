 
      const btnHam = document.querySelector(".header__ham");
      const btnMenu = document.querySelector(".menu");
      const btnMenuList = document.querySelectorAll("ul li a");

      // 헤더 햄버거 메뉴 클릭시 스크롤 고정 설정
      btnHam.addEventListener("click", () => {
          btnHam.classList.toggle("active");
          btnMenu.classList.toggle("active");
          document.body.classList.toggle("fixed");
      });
      // 브라우저 크기에 따른 햄버거 메뉴 클릭시 스크롤 고정, 메뉴 활성화 여부 설정
      window.addEventListener("resize", () => {
          let width = window.innerWidth;
          if (width > 1279) {
              document.body.classList.remove("fixed");
              btnMenu.classList.remove("active");
              btnHam.classList.remove("active");
          }
      });
      // 햄버거 메뉴에서 메뉴 클릭시 메뉴바가 비활성화 되도록 설정
      btnMenuList.forEach(list => {
          list.addEventListener("click", () => {
              document.body.classList.remove("fixed");
              btnMenu.classList.remove("active");
              btnHam.classList.remove("active");
          });
      });
        // scrollTop 위치값에 따른 메뉴바 활성화 상태 설정
  window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTo
      //forEach문
      document.querySelectorAll(".slide").forEach((el, i) => {
          if (scrollTop >= el.offsetTop-100) {
              document.querySelectorAll(".menu li").forEach((li) => {
                  li.classList.remove("active");
              });
              document.querySelector(".menu li:nth-child(" + (i + 1) + ")").classList.add("active");
          }
      });
  });

    // 메뉴 이동 시 부드럽게~
    document.querySelectorAll(".menu li a").forEach((li) => {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });


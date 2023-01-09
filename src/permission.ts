import router from "./router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/404"]; // no redirect whitelist

function getPageTitle(pageTitle: any) {
  const title = "企业官网";
  if (pageTitle) {
    return `${title} - ${pageTitle}`;
  }
  return `${title}`;
}

router.beforeEach(async (to: any, from, next) => {
  document.title = getPageTitle(to.meta.title);
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next();
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});

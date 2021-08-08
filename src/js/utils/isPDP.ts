import currentTab from './currentTab';
import stripURL from './stripURL';

async function isPDP() {
  let isProductPage = false;

  await new Promise((resolve) => {
    currentTab(({ url }) => {
      const { params } = stripURL(url);
      isProductPage = !!params?.match(/\/p$/)?.[0];
      resolve(() => { });
    });
  });

  return isProductPage;
}

export default isPDP;

// TODO: TS demos for personal/educational use
// import * as _ from "lodash";

// let message: string = 'Hello World';
// console.log(message);

// const result1 = _.padStart("Hello TypeScript!", 20, " ");
// const result2 = _.groupBy(['one', 'two', 'three'], 'length');
// const result3 = _.groupBy(['1', '2', '2'], "length");
// console.log("result1 >>",result1);
// console.log("result2 >>",result2);
// console.log("result3 >>",result3);

const selectedVariant = props.values.product.variants.find(
    (element) => {
      element.selectedOptions[0].name ==
        props.values.variant.toLowerCase();
    }
  );
  // eslint-disable-next-line no-console
  console.log(selectedVariant);
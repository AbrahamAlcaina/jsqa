import React from 'react-native';
/**
 * High Order Component for pure render.
 * memoize the Component because I use immutable.js
 * See https://github.com/facebook/react/issues/5677
 */
export const pureRender = (Component, ...propsToWatch) => {
  let memo;
  let oldProps = {};
  return props => {
    if (!propsToWatch || propsToWatch.length === 0) {
      if (memo && oldProps === props) {
        return memo;
      }
      oldProps = props;
      memo = <Component { ...props } />;
      return memo;
    }
    const change = propsToWatch
      .reduce((current, item) => current
        || (Object.keys(oldProps).includes(item)
          && oldProps[item] !== props[item])
      , false);
    if (memo && !change) {
      return memo;
    }
    Object.keys(props)
      .filter(key => propsToWatch.includes(key))
      .map(key => oldProps[key] = props[key]);
    memo = <Component { ...props } />;
    return memo;
  };
};

export default pureRender;

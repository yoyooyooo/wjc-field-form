import React from "react";
import { Field } from "rc-field-form";
import styled from "styled-components";
import { Col, Icon } from "antd";
import { animated, useTransition } from "react-spring";

const Wrap = styled.div`
  position: relative;
  display: flex;
  /* margin-bottom: ${p => (p.hasError ? "5px" : "20px")}; */
`;
const LabelWrap = styled(Col)`
  display: flex;
`;
const ItemWrap = styled(Col)``;
const Label = styled.label`
  width: ${p => p._width || 200}px;
  height: 32px;
  line-height: 32px;
  text-align: right;
  padding-right: 5px;
  ${p =>
    p.colon &&
    ` &::after {
      content: ':';
      display: inline-block;
    }`}
`;

const ErrorWrap = styled(animated.div)`
  color: red;
`;
const Error = ({ children }) => {
  const transitions = useTransition(children.slice(0, 1), (item, i) => i, {
    from: { opacity: 0, transform: "translate3d(0,-5px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0,-5px,0)"
      // position: 'absolute'
    },
    unique: true
  });
  return transitions.map(({ item, key, props }) => (
    <ErrorWrap key={key} style={props}>
      {item}
    </ErrorWrap>
  ));
};

const Meta = ({ touched, validating }) => {
  return (
    <div style={{ color: "green" }}>
      {touched ? <span>Touched!</span> : null}
      {validating ? <span>Validating!</span> : null}
    </div>
  );
};

function defaultMapMetaToChildren({ validating, errors }) {
  return {
    suffix: validating ? (
      <Icon type="loading" />
    ) : errors.length > 0 ? (
      <Icon type="close-circle" />
    ) : (
      <Icon type="check-circle" />
    )
  };
}

export default ({
  name,
  label,
  children,
  renderMeta,
  colon,
  labelCol,
  wrapperCol,
  hasFeedback = false,
  mapMetaToChildren,
  ...restProps
}) => {
  return (
    <Field name={name} {...restProps}>
      {(control, meta, form) => {
        const childNode =
          typeof children === "function"
            ? children(control, meta, form)
            : React.cloneElement(children, {
                ...control,
                ...(hasFeedback || mapMetaToChildren
                  ? (mapMetaToChildren || defaultMapMetaToChildren)(meta)
                  : {})
              });

        return (
          <Wrap hasError={meta.errors.length > 0}>
            <LabelWrap {...labelCol}>
              {((label !== undefined && label) || label === undefined) && (
                <Label _width={200} colon={colon}>
                  {label || name}
                </Label>
              )}
            </LabelWrap>
            <ItemWrap {...wrapperCol}>
              {childNode}
              <Error>{meta.errors}</Error>
            </ItemWrap>
            {renderMeta && renderMeta(meta)}
          </Wrap>
        );
      }}
    </Field>
  );
};

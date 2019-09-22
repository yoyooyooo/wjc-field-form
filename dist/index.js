'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rcFieldForm = require('rc-field-form');
var rcFieldForm__default = _interopDefault(rcFieldForm);
var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var antd = require('antd');
var reactSpring = require('react-spring');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: red;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n  padding-right: 5px;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  /* margin-bottom: ", "; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap = styled.div(_templateObject(), function (p) {
  return p.hasError ? "5px" : "20px";
});
var LabelWrap = styled(antd.Col)(_templateObject2());
var ItemWrap = styled(antd.Col)(_templateObject3());
var Label = styled.label(_templateObject4(), function (p) {
  return p._width || 200;
}, function (p) {
  return p.colon && " &::after {\n      content: ':';\n      display: inline-block;\n    }";
});
var ErrorWrap = styled(reactSpring.animated.div)(_templateObject5());

var Error = function Error(_ref) {
  var children = _ref.children;
  var transitions = reactSpring.useTransition(children.slice(0, 1), function (item, i) {
    return i;
  }, {
    from: {
      opacity: 0,
      transform: "translate3d(0,-5px,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0)"
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0,-5px,0)" // position: 'absolute'

    },
    unique: true
  });
  return transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return React.createElement(ErrorWrap, {
      key: key,
      style: props
    }, item);
  });
};

function defaultMapMetaToChildren(_ref4) {
  var validating = _ref4.validating,
      errors = _ref4.errors;
  return {
    suffix: validating ? React.createElement(antd.Icon, {
      type: "loading"
    }) : errors.length > 0 ? React.createElement(antd.Icon, {
      type: "close-circle"
    }) : React.createElement(antd.Icon, {
      type: "check-circle"
    })
  };
}

var Field = (function (_ref5) {
  var name = _ref5.name,
      label = _ref5.label,
      children = _ref5.children,
      renderMeta = _ref5.renderMeta,
      colon = _ref5.colon,
      labelCol = _ref5.labelCol,
      wrapperCol = _ref5.wrapperCol,
      _ref5$hasFeedback = _ref5.hasFeedback,
      hasFeedback = _ref5$hasFeedback === void 0 ? false : _ref5$hasFeedback,
      mapMetaToChildren = _ref5.mapMetaToChildren,
      restProps = _objectWithoutProperties(_ref5, ["name", "label", "children", "renderMeta", "colon", "labelCol", "wrapperCol", "hasFeedback", "mapMetaToChildren"]);

  return React.createElement(rcFieldForm.Field, _extends({
    name: name
  }, restProps), function (control, meta, form) {
    var childNode = typeof children === "function" ? children(control, meta, form) : React.cloneElement(children, _objectSpread2({}, control, {}, hasFeedback || mapMetaToChildren ? (mapMetaToChildren || defaultMapMetaToChildren)(meta) : {}));
    return React.createElement(Wrap, {
      hasError: meta.errors.length > 0
    }, React.createElement(LabelWrap, labelCol, (label !== undefined && label || label === undefined) && React.createElement(Label, {
      _width: 200,
      colon: colon
    }, label || name)), React.createElement(ItemWrap, wrapperCol, childNode, React.createElement(Error, null, meta.errors)), renderMeta && renderMeta(meta));
  });
});

Object.defineProperty(exports, 'Field0', {
  enumerable: true,
  get: function () {
    return rcFieldForm.Field;
  }
});
exports.Form = rcFieldForm__default;
Object.defineProperty(exports, 'FormInstance', {
  enumerable: true,
  get: function () {
    return rcFieldForm.FormInstance;
  }
});
Object.defineProperty(exports, 'FormProvider', {
  enumerable: true,
  get: function () {
    return rcFieldForm.FormProvider;
  }
});
Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function () {
    return rcFieldForm.List;
  }
});
Object.defineProperty(exports, 'useForm', {
  enumerable: true,
  get: function () {
    return rcFieldForm.useForm;
  }
});
exports.Field = Field;

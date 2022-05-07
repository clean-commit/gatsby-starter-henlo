import PropTypes from 'prop-types';
import React from 'react';

export const schema = {
  properties: {
    url: { type: 'string' },
    prefix: { type: 'string' },
  },
};

export class PermalinkControl extends React.Component {
  constructor(props) {
    super(props);
    let decoded = this.decodeSlug(this.props.value);
    this.state = {
      showEdit: false,
      inputVal: decoded,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  slugify(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^\w^/\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  isValid = () => {
    const { value } = this.state.inputVal;
    if (!value) return true;
    const parser = document.createElement('a');
    parser.href = `http://example.com${this.prepareUrl(value)}/`;
    return parser.pathname !== value
      ? { error: { message: 'Invalid pathname.' } }
      : true;
  };

  decodeSlug(val) {
    let prefix = this.props.field.get('prefix', '');

    if (prefix) {
      val.replace(`/${prefix}/`, '');
    }

    if (val == '/') {
      return '';
    }

    return val
      .split('/')
      .filter((n) => n && n !== prefix)
      .join('/');
  }

  toggleEdit() {
    this.setState((prev) => {
      return {
        showEdit: !prev.showEdit,
      };
    });
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  prepareUrl(val) {
    console.log(val);
    let result = val;
    let prefix = this.props.field.get('prefix', '');

    if (val === '') {
      return '/';
    }

    if (result.charAt(0) !== '/') {
      result = `/${result}/`;
    }

    if (prefix) {
      result = `/${prefix}${result}`;
    }

    return result;
  }

  saveEdit() {
    let slug = this.slugify(this.state.inputVal);
    this.setState({
      showEdit: false,
      inputVal: slug,
    });

    this.prepareUrl(slug);

    this.props.onChange(this.prepareUrl(slug));
  }

  render() {
    const { field, forID, value, classNameWrapper } = this.props;
    const url = field.get('url', '');
    const prefix = field.get('prefix', '');

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 14 }}>Permalink:</span>
          {this.state.showEdit && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{ fontSize: 14, display: 'flex', alignItems: 'center' }}>
                {url}/ {prefix && <span>{prefix}/</span>}
              </div>
              <input
                id={forID}
                className={classNameWrapper}
                style={{ height: 20, padding: 5 }}
                value={this.state.inputVal}
                onChange={this.handleChange}
              />
              <span>/</span>
              <button onClick={this.saveEdit}>OK</button>
              <button onClick={this.toggleEdit}>Cancel</button>
            </div>
          )}
          {!this.state.showEdit && (
            <a
              style={{ color: 'blue', textDecoration: 'underline' }}
              href={`${url}${value}`}
              target='_blank'>
              {url}
              {value}
            </a>
          )}
          {!this.state.showEdit && (
            <button onClick={this.toggleEdit}>Edit</button>
          )}
        </div>
      </div>
    );
  }
}

PermalinkControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
};

PermalinkControl.defaultProps = {
  value: '',
};

export function PermalinkPreview({ value }) {
  return false;
}

PermalinkPreview.propTypes = {
  value: PropTypes.node,
};

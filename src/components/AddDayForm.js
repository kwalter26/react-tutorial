import { Component, PropTypes } from 'react';

export class AddDayForm extends Component {
  constructor (props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();
    console.log('resort', this.refs.resort.value);
    console.log('date', this.refs.date.value);
    console.log('powder', this.refs.powder.checked);
    console.log('backcountry', this.refs.backcountry.checked);
  }
  render () {
    const {resort, date, powder, backcountry} = this.props;

    return (
      <form onSubmit={this.submit} className='add-day'>
        <label htmlFor='resort'>
          Resort Name
        </label>
        <input
          id='resort'
          type='text'
          defaultValue={resort}
          ref='resort'
          required/>
        <label htmlFor='date'>
          Date
        </label>
        <input
          id='date'
          type='date'
          defaultValue={date}
          ref='date'
          required/>
        <div>
          <input id='powder' type='checkbox' defaultChecked={powder} ref='powder' />
          <label htmlFor='powder'>
            Powder Day
          </label>
        </div>
        <div>
          <input id='backcountry' type='checkbox' defaultChecked={backcountry} ref='backcountry' />
          <label htmlFor='backcountry'>
            Backcountry Day
          </label>
        </div>
        <button>Add Day</button>
      </form>
    );
  }
};

AddDayForm.defaultProps = {
  resort: 'Kirkwood',
  date: '2017-02-12',
  powder: true,
  backcountry: false
};

AddDayForm.PropTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool
};

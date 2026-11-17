/**
 * The code of the application Test: the methods its bindings call (an
 * event of a component → a method). It is the base class of the App
 * component of the Angular application: a method gets the value of the
 * event (a value, a checked state, an index…), and can read and write the
 * signals of the dataflow (this.slider1_value(), this.slider1_value.set (5)).
 */
export class TestLogic {
  /** The default method of the bindings */
  notify(event) {
  }
}

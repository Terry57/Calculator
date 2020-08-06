import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
let dom;
let container;
describe('calculator functionality', () => {
  beforeEach(() => {    
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  })
  test('has an add button', () => {
    expect(container.querySelector('.btn-add')).not.toBeNull();
    expect(getByText(container, '+')).toBeInTheDocument();
  })
  test('has a subtract button', () => {
    expect(container.querySelector('.btn-subtract')).not.toBeNull();
    expect(getByText(container, '-')).toBeInTheDocument();
  })
  test('has a multiply button', () => {
    expect(container.querySelector('.btn-multiply')).not.toBeNull();
    expect(getByText(container, '*')).toBeInTheDocument();
  })
  test('has a divide button', () => {
    expect(container.querySelector('.btn-divide')).not.toBeNull();
    expect(getByText(container, '/')).toBeInTheDocument();
  }) 
  test('can subtract two number', () => {
    let number1 = container.querySelector("#input1");
    let number2 = container.querySelector("#input2");
    fireEvent.change(number1, {target: { value: 3 } });
    fireEvent.change(number2, {target: { value: 2 } });
    const button = getByText(container, '-');
    fireEvent.click(button);
    let result = container.querySelector("#output");
    expect(parseFloat(result.innerHTML)).toBe(1);
  })
  test('can add two number', () => {
    let number1 = container.querySelector("#input1");
    let number2 = container.querySelector("#input2");
    fireEvent.change(number1, {target: { value: 3 } });
    fireEvent.change(number2, {target: { value: 2 } });
    const button = getByText(container, '+');
    fireEvent.click(button);
    let result = container.querySelector("#output");
    expect(parseFloat(result.innerHTML)).toBe(5);
  })
  test('can multiply two number', () => {
    let number1 = container.querySelector("#input1");
    let number2 = container.querySelector("#input2");
    fireEvent.change(number1, {target: { value: 3 } });
    fireEvent.change(number2, {target: { value: 2 } });
    const button = getByText(container, '*');
    fireEvent.click(button);
    let result = container.querySelector("#output");
    expect(parseFloat(result.innerHTML)).toBe(6);
  })
  test('can divide two number', () => {
    let number1 = container.querySelector("#input1");
    let number2 = container.querySelector("#input2");
    fireEvent.change(number1, {target: { value: 6 } });
    fireEvent.change(number2, {target: { value: 3 } });
    const button = getByText(container, '/');
    fireEvent.click(button);
    let result = container.querySelector("#output");
    expect(parseFloat(result.innerHTML)).toBe(2);
  })

})
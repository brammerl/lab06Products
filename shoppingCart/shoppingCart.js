import bookStock from '../data/books.js';
import orderOne from '../data/cart.js';
import { renderDom }from './renderDom.js';

import { findById } from '../common/utils.js';

const tbody = document.getElementById('body');

const saturn = findById(orderOne, 'Saturn');

const saturnStock = findById(bookStock, 'Saturn');

const newItem = renderDom(saturn, saturnStock);

tbody.appendChild(newItem);

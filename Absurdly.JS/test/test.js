'use strict';

import { expect } from 'chai';
import { firstLetter } from '../index';

describe('#firstLetter', function() {
	it('Should return the first letter', function() {
		var result = firstLetter('some text');
		expect(result).to.equal('s');
	});
});

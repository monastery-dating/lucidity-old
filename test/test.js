'use strict'

require ( 'chai' )
.should ()
const Lucy = require ( '../index' )

describe
( 'Lucidity'
, function ()
  { it
    ( 'should be empty'
    , function ()
      { Lucy
        .should.deep.equal ( {} )
      }
    )
  }
)


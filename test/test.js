'use strict'

require ( 'chai' )
.should ()
const lucy = require ( '../index' )

const app   = require ( 'lucy-app'   )
const boot  = require ( 'lucy-boot'  ).boot
const forge = require ( 'lucy-forge' ) 
const live  = require ( 'lucy-live'  )
const util  = require ( 'lucy-util'  )

describe
( 'Lucidity'
, function ()
  { it
    ( 'should be empty'
    , function ()
      { lucy
        .should.deep.equal
        ( { app
          , boot
          , forge
          , live
          , util
          }
        )
      }
    )
  }
)


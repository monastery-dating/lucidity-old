'use strict'

require ( 'chai' )
.should ()
const lucy = require ( '../index' )

const app     = require ( 'lucy-app'     )
const boot    = require ( 'lucy-boot'    ).boot
const compose = require ( 'lucy-compose' )
const forge   = require ( 'lucy-forge'   ) 
const live    = require ( 'lucy-live'    )
const three   = require ( 'lucy-three'   )
const util    = require ( 'lucy-util'    )

describe
( 'Lucidity'
, function ()
  { it
    ( 'should load all modules'
    , function ()
      { lucy
        .should.deep.equal
        ( { app
          , boot
          , compose
          , forge
          , live
          , three
          , util
          }
        )
      }
    )
  }
)


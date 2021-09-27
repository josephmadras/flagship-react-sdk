import { useContext } from 'react'
import { HitAbstract, IFlagshipConfig, IHit, Modification, modificationsRequested, primitive } from '@flagship.io/js-sdk'
import { FlagshipContext } from './FlagshipContext'
import { logError, logWarn } from './utils'

/**
 * Retrieve a modification value by its key. If no modification match the given key or if the stored value type and default value type do not match, default value will be returned.
 */
export const useFsModifications:{
    <T>(params: modificationsRequested<T>[], activateAll?: boolean): Promise<T[]>
} = async (params, activateAll) => {
  return useFsModificationsSync(params, activateAll)
}

/**
 * Retrieve a modification value by its key. If no modification match the given key or if the stored value type and default value type do not match, default value will be returned.
 */
export const useFsModificationsSync:{
    <T>(params: modificationsRequested<T>[], activateAll?: boolean): T[]
} = (params, activateAll) => {
  const { state } = useContext(FlagshipContext)
  const { visitor, config } = state
  const functionName = 'useFsModifications'

  if (visitor) {
    return visitor.getModificationsSync(params, activateAll)
  }

  logWarn(config, noVisitorDefault, functionName)

  return params.map(item => {
    return item.defaultValue
  })
}

/**
 * Retrieve a modification value by its key. If no modification match the given key or if the stored value type and default value type do not match, default value will be returned.
 */
export const useFsModification:{
  <T>(params: modificationsRequested<T>): Promise<T>
} = async (params) => {
  return useFsModificationSync(params)
}

/**
 * Retrieve a modification value by its key. If no modification match the given key or if the stored value type and default value type do not match, default value will be returned.
 */
export const useFsModificationSync:{
  <T>(params: modificationsRequested<T>): T
} = (params) => {
  const { state } = useContext(FlagshipContext)
  const { visitor, config } = state
  const functionName = 'useFsModifications'

  if (visitor) {
    return visitor.getModificationSync(params)
  }

  logWarn(config, noVisitorDefault, functionName)

  return params.defaultValue
}

/**
 * Get the campaign modification information value matching the given key.
 * @param {string} key key which identify the modification.
 */
export const useFsModificationInfo = async (key: string):Promise<Modification | null> => {
  return useFsModificationInfoSync(key)
}

/**
 * Get the campaign modification information value matching the given key.
 * @param {string} key key which identify the modification.
 */
export const useFsModificationInfoSync:{
    (key: string):Modification | null} = (key: string) => {
      const { state } = useContext(FlagshipContext)
      const { visitor } = state
      if (visitor) {
        return visitor.getModificationInfoSync(key)
      }
      return null
    }

/**
 * This function calls the decision api and update all the campaigns modifications from the server according to the visitor context.
*/
export const useFsSynchronizeModifications = async ():Promise<void> => {
  const { state } = useContext(FlagshipContext)
  const { visitor, config } = state
  const functionName = 'useFsSynchronizeModifications'
  try {
    if (!visitor) {
      reportNoVisitor(config, functionName)
      return
    }
    await visitor.synchronizeModifications()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    logError(config, error.message || error, functionName)
  }
}

/**
 * Report this user has seen this modification. Report this user has seen these modifications.
 * @param params
 * @returns
 */
export const useFsActivate:{
    (keys: { key: string }[]): Promise<void>
    (keys: string[]):Promise<void>
} = async (params) => {
  const { state } = useContext(FlagshipContext)
  const { visitor, config } = state
  const functionName = 'useFsModifications'

  try {
    if (!visitor) {
      logWarn(config, noVisitorMessage, functionName)
      return
    }
    await visitor.activateModifications(params)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    logWarn(config, error.message || error, functionName)
  }
}

export type UseFlagshipParams<T> ={
  modifications:{
    requested: modificationsRequested<T>[]
    activateAll?: boolean
  }
}

export type UseFlagshipOutput<S> = {
  modifications: S|S[]
  getModifications <T>(params: modificationsRequested<T>[], activateAll?: boolean): Promise<T[]>
  getModificationsAsync<T>(params: modificationsRequested<T>[], activateAll?: boolean): T[]
  getModificationInfo (key: string) : Promise<Modification | null>
  getModificationInfoSync (key: string) : Modification | null
  synchronizeModifications(): Promise<void>
  /**
 * Update the visitor context values, matching the given keys, used for targeting.
 * A new context value associated with this key will be created if there is no previous matching value.
 * Context keys must be String, and values types must be one of the following : Number, Boolean, String.
 * @param context collection of keys, values.
 */
  updateContext(context: Record<string, primitive>):void
  /**
 * clear the actual visitor context
 */
  clearContext():void
    /**
 * Authenticate anonymous visitor
 * @param visitorId
 */
  authenticate(visitorId: string): void
    /**
 * This hook change authenticated Visitor to anonymous visitor
 * @param visitorId
 */
  unauthenticate():void
  hit: {
      send:{
        (hit: HitAbstract): Promise<void>
        (hit: HitAbstract | IHit): Promise<void>
      }
      sendMultiple:{
        (hit: HitAbstract[]): Promise<void>
        (hit: IHit[]): Promise<void>
      }
  };
};

export const useFlagship = <S extends unknown>(options?:UseFlagshipParams<S>):UseFlagshipOutput<S> => {
  const { modifications: { requested, activateAll } } = options || { modifications: { requested: [], activateAll: false } }
  const { state } = useContext(FlagshipContext)
  const { visitor, config } = state

  const fsUpdateContext = (context:Record<string, primitive>):void => {
    const functionName = 'updateContext'
    if (!visitor) {
      logError(config, noVisitorMessage, functionName)
      return
    }
    visitor.clearContext()
    visitor.updateContext(context)
  }

  const fsClearContext = ():void => {
    const functionName = 'cleanContext'
    if (!visitor) {
      logError(config, noVisitorMessage, functionName)
      return
    }
    visitor.clearContext()
  }

  const fsAuthenticate = (visitorId:string):void => {
    const functionName = 'authenticate'
    if (!visitor) {
      logError(config, noVisitorMessage, functionName)
      return
    }
    visitor.authenticate(visitorId)
  }

  const fsUnauthenticate = ():void => {
    const functionName = 'unauthenticate'
    if (!visitor) {
      logError(config, noVisitorMessage, functionName)
      return
    }
    visitor.unauthenticate()
  }

  /**
 * Send a Hit to Flagship servers for reporting.
 */
  const fsSendHit:{
  (hit: HitAbstract | IHit): Promise<void>} = (hit) => {
    const functionName = 'sendHit'
    if (!visitor) {
      logError(config, noVisitorMessage, functionName)
      return Promise.resolve()
    }
    return visitor.sendHit(hit)
  }

  /**
 * Send a Hit to Flagship servers for reporting.
 */
  const fsSendHits:{
    (hit: HitAbstract[]|IHit[]): Promise<void>} = (hit) => {
      const functionName = 'sendHits'
      if (!visitor) {
        logError(config, noVisitorMessage, functionName)
        return Promise.resolve()
      }
      return visitor.sendHits(hit)
    }

  return {
    updateContext: fsUpdateContext,
    clearContext: fsClearContext,
    authenticate: fsAuthenticate,
    unauthenticate: fsUnauthenticate,
    synchronizeModifications: useFsSynchronizeModifications,
    getModificationsAsync: useFsModificationsSync,
    getModifications: useFsModifications,
    modifications: useFsModificationsSync(requested, activateAll),
    getModificationInfo: useFsModificationInfo,
    getModificationInfoSync: useFsModificationInfoSync,
    hit: {
      send: fsSendHit,
      sendMultiple: fsSendHits
    }
  }
}

export const noVisitorMessage = 'sdk not correctly initialized... Make sure fsVisitor is ready.'
export const noVisitorDefault = 'fsVisitor not initialized, returns default value'

const reportNoVisitor = (config: IFlagshipConfig|undefined, tag:string): void => {
  logError(config, noVisitorMessage, tag)
}

/**
 * @typedef {Object} ConfigurationSourceDirectories
 * @property {string} modules
 * @property {string} layoutModules
 * @property {string} standaloneStyleLibraries
 * @property {string} standaloneScriptLibraries
 * @property {string} libraryScripts
 * @property {string} libraryStyles
 * @property {string} markupTemplates
 * @property {string} components
 */

/**
 * @typedef {Object} ConfigurationOutputDirectories
 * @property {string} moduleScripts
 * @property {string} layoutModuleScripts
 * @property {string} vendorScripts
 * @property {string} moduleStyles
 * @property {string} layoutModuleStyles
 * @property {string} vendorStyles
 * @property {string} standaloneStyleLibraries
 * @property {string} standaloneScriptLibraries
 * @property {string} markupFiles
 * @property {string} componentScripts
 * @property {string} componentStyles
 */

/**
 * @typedef {Object} RelativePathOfReference
 * @property {string} standardPath
 * @property {string} minPath
 */

/**
 * @typedef {Object} ConfigurationVendor
 * @property {string} sourceDirectory
 * @property {RelativePathOfReference[]} relativePathsOfReferences
 */


/**
 * @typedef {Object} ConfigurationModule
 * @property {string[]} substitutingModules
 * @property {string} layoutModule
 * @property {string} markupTemplate
 * @property {string[]} includeStandaloneStyles
 * @property {string[]} includeVendorScripts
 * @property {string[]} includeVendorStyles
 * @property {string[]} excludeStandaloneStyles
 * @property {string[]} excludeVendorScripts
 * @property {string[]} excludeVendorStyles
 * @property {string[]} includeStaticScriptReferences
 * @property {string[]} excludeStaticScriptReferences
 * @property {string[]} includeStaticStyleReferences
 * @property {string[]} excludeStaticStyleReferences
 */

/**
 * @typedef {Object} ConfigurationLayoutModule
 * @property {string} layoutModule
 * @property {string} markupTemplate
 * @property {string[]} includeStandaloneStyles
 * @property {string[]} includeStandaloneScripts
 * @property {string[]} includeVendorScripts
 * @property {string[]} includeVendorStyles
 * @property {string[]} excludeStandaloneStyles
 * @property {string[]} excludeStandaloneScripts
 * @property {string[]} excludeVendorScripts
 * @property {string[]} excludeVendorStyles
 * @property {string[]} includeStaticScriptReferences
 * @property {string[]} excludeStaticScriptReferences
 * @property {string[]} includeStaticStyleReferences
 * @property {string[]} excludeStaticStyleReferences
 */

/**
 * Represents configuration object for build process.
 * @typedef {Object} Configuration
 * @property {'typescript'|'javascript'} projectType
 * @property {string} projectDirectory
 * @property {ConfigurationSourceDirectories} sourceDirectories
 * @property {ConfigurationOutputDirectories} outputDirectories
 * @property {ConfigurationReferenceParentPaths} referenceParentPaths
 * @property {Object.<string,ConfigurationVendor} vendorScripts
 * @property {Object.<string,ConfigurationVendor>} vendorStyles
 * @property {Object.<string,string>} staticScriptReferences
 * @property {Object.<string,string>} staticStyleReferences
 * @property {Object.<string,ConfigurationModule>} modules
 * @property {Object.<string,ConfigurationLayoutModule>} layoutModules
 * @property {string} publicDirectory
 * @property {string} defaultMarkupTemplate
 * @property {string} nameSeperator
 * @property {string[]} validStandaloneLibraryEntryFileNames
 * @property {string} moduleFileName
 * @property {string} rootModuleFileName
 * @property {string} contentExpression
 * @property {string} scriptExpression
 * @property {string} styleExpression
 * @property {string} componentPostFix
 * @property {Array<postFix:string,isRecursive:boolean>} expressions
 */
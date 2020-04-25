# dnd-5e-spells

---
**DEPRECTAED**

This project has been deprecated.

The same functionality is available through the [SRD API](https://github.com/evilmonkeyinc/srd-api)

---

List of the spells available on the OGL licence from the SRD

## Usage

`npm install @evilmonkeyinc/dnd-5e-spells`

then import

`import { raw, getSpellAPI } from '@evilmonkeyinc/dnd-5e-spells';`

The data can be retrieved in its raw format using the `raw()` function.

Alternatively you can use the `getSpellAPI()` function to get the `SpellAPI` which allows you to query to collection in various ways.

### get

Gets the named spell. This is case insensitive.

### list

Gets all the available spells in the collection.

### query

Query the available spells in the collection.

You can state one or more of the following filters:
- classes: one or more SpellcasterClass that the spells could belong to.
- levels: one or more spell levels that the spell could have.
- name: a string to compare to part or the whole of a name of a spell. This is case insensitive.
- schools: one or more spell School that the spell could have.

for example, you can request all cantrips (level 0) for Wizards and Warlocks, and all the spells returned will have level 0 and the wizard and/or warlock values in classes

# Licence

The file `public/spells.json` contains content from the SRD and is restricted and covered by the Open Gaming Licence (OGL).

You can find the OGL [here](http://www.opengamingfoundation.org/ogl.html).

https://www.wizards.com/default.asp?x=d20/oglfaq/20040123f
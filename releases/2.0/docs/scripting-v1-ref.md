# Complete Scripting Reference

The following functions are exposed at the top level to scripts:

* [`on(name: string, callback: () => void): void`](#onname-string-callback-gt-void-void)
* [`off(name: string, callback: () => void): void`](#offname-string-callback-gt-void-void)
* [`addLayer(layerName: string, config: Object, style: React.CSSProperties): number`](#addlayerlayername-string-config-object-style-reactcssproperties-number)
* [`addLayer(layer: Layer): number`](#addlayerlayer-layer-number)
* [`layer(...filters: Object): Layer`](#layerfilters-object-layer)
* [`bulkUpdate(callback: () => void): void`](#bulkupdatecallback-gt-void-void)
* [`setTimeout(callback: () => void, delay: number): void`](#settimeoutcallback-gt-void-delay-number-void)
* [`setInterval(callback: () => void, period: number): void`](#setintervalcallback-gt-void-period-number-void)

The `settings` property is also a top-level object, documented [here](/scripting-v1-settings).

#### `Layer` properties
```javascript
{
    id: number; // The layer ID, if the layer is in the overlay
    elementName: string; // contains the name of the Element that will render the layer
    label: string; // contains the UI label for the layer
    config: Object; // The configuration object for the layer. Depends on the type of layer.
    style: React.CSSProperties; // CSS style information for the layer.
    hidden: boolean // controls whether the layer is visible
}
```
For more information about the `config` property, see the [layer documentation](/scripting-v1-layers).

#### `Layer` methods

* [`config(): Object | null`](#config-object-null)
* [`config(configuration: Object): Layer`](#configconfiguration-object-layer)
* [`style(): React.CSSProperties | null`](#style-reactcssproperties-null)
* [`style(props: React.CSSProperties): Layer`](#styleprops-reactcssproperties-layer)
* [`moveUp(toTop: boolean): Layer`](#moveuptotop-boolean-layer)
* [`moveDown(toBottom: boolean): Layer`](#movedowntobottom-boolean-layer)
* [`remove(): void`](#remove-void)
* [`clone(): Layer`](#clone-layer)
* [`dom(): Object`](#dom-object)

<h2>Details</h2>

# `on(name: string, callback: () => void): void`
Subscribes to the specified event `name` with `callback`. The event bus implementation is incomplete and this
should not be used until a later version.

# `off(name: string, callback: () => void): void`
Unsubscribes the given `callback` from the specified event `name`. The event bus implementation is incomplete and this
should not be used until a later version.

# `addLayer(layerName: string, config: Object, style: React.CSSProperties): number`
Constructs a layer explicitly and adds it to the overlay, returning the new layer's ID. For example,
to create a simple text layer:
```javascript
const textLayerID = addLayer("Text 1", { text: "Hello World!" }, { top: 45, left: 45 });
```
This would position the text layer 45 pixels from the top and left of the overlay, with the 
text `"Hello World!"`. For a reference of `config` properties, see the [layer documentation](/scripting-v1-layers).

# `addLayer(layer: Layer): number`
Adds an existing layer object to the overlay. This is most useful when combined with [cloneLayer](#clone-layer).

# `layer(...filters: Object): Layer`
Selects any number of layers with properties matching any of the specified filter objects. The exact structure of the layer 
object is an implementation detail and subject to change, so it should not be relied upon. However, the properties
specified [above](#layer-properties) are suitable for filtering.
```javascript
// Selects the layer named "Text 1".
const textLayer = layer("Text 1");

// Selects the layer with ID 1.
const layerOne = layer(1);

// Selects all layers in the overlay.
const allLayers = layer({});

// Selects all text elements
const allTextLayersLayers = layer({ elementName: "text" });
```
Internally every layer matching the filters is stored in the returned object. This means that:
* `style` and `config` properties cannot be accessed directly. Use the methods in `Layer`.
* Objects returned from the `layer` function are not suitable for long-term reference. `layer` should be called
every time you want to modify a layer.
* Non-getter methods in `Layer` will apply changes to all layers selected.

# `bulkUpdate(callback: () => void): void`
Allows multiple updates to the overlay to be executed at once. Normally, every call to `style` or `config` triggers
its own update. If many updates are to be applied together, this may be expensive so `bulkUpdate` should be used.
```javascript
// Moves all text layers to the upper left corner of the screen, then moves a rectangle. 
bulkUpdate(() => {
    layer({ elementName: "text" }).style({ top: 0, left: 0 });
    layer("Rectangle 1").style({ top: "25px", left: "25px" });
});
```

<h2>Layer Method Details</h2>

# `config(): Object | null`
Gets the configuration object for the layer, or `null` if no layers matched the selector.

# `config(configuration: Object): Layer`
Merges the `configuration` object into the layer's existing configuration object. 
```javascript
// Changes a layer's text
layer({ elementName: "Text 1" }).config({ text: "new text" });
```

# `style(): React.CSSProperties | null`
Gets the style object for the layer, or `null` if no layers matched the selector.

# `style(props: React.CSSProperties): Layer`
Merges the `props` object into the layer's existing style.

# `moveUp(toTop: boolean): Layer`
Changes the layer's stacking order, moving it either one layer towards the top or, if `toTop` is `true`, moves it
to the top of the stack.

# `moveDown(toBottom: boolean): Layer`
Changes the layer's stacking order, moving it either one layer towards the bottom or, if `toBottom` is `true`, moves it
to the bottom of the stack.

# `remove(): void`
Removes the layer from the overlay. This should not be used to make layers invisible; instead, use the
`hidden` configuration property.

# `clone(): Layer`
Makes a copy of the layer without inserting it into the overlay. If multiple layers were selected, this returns an
array of layers which must be inserted into the overlay individually:
```javascript
// clones all hidden layers and inserts them into the overlay.
let layers = layer({ hidden: true }).clone().forEach(l => addLayer(l));
```

# `dom(): Object`
Returns the DOM object for the layer. This is a dangerous function to use and should be avoided if possible. If there
is a feature you need that can currently only be accomplished by modifying the DOM, please consider opening an
[issue](https://github.com/mikesci/open-overlay/issues) on GitHub or making a [pull request](https://github.com/mikesci/open-overlay/pulls).
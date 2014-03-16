(function(xtag){
'use strict';

    /* HTML and CSS based on http://proto.io/freebies/onoff/ */

    xtag.register('wb-switch', {
        lifecycle: {
            created: function(){
                var id = xtag.randomId();
                var checked = this.hasAttribute('checked');
                this.xtag.input = xtag.html('input', {
                    type: 'checkbox',
                    name: 'onoffswitch',
                    'class': 'onoffswitch-checkbox',
                    id: id
                });
                if (checked){
                    this.xtag.input.setAttribute('checked', 'checked');
                }
                this.xtag['switch'] = xtag.html('div', {'class': 'onoffswitch'},[
                    this.xtag.input,
                    xtag.html('label', {
                        'class': 'onoffswitch-label',
                        'for': id
                    },[
                        xtag.html('div', { 'class': 'onoffswitch-inner'}),
                        xtag.html('div', {'class': 'onoffswitch-switch'})
                    ])
                ]);
                this.appendChild(this.xtag['switch']);
            },
            inserted: function(){

            },
            removed: function(){

            },
            attributeChanged: function(something){
                console.log('attributeChanged: %s', something);
            }
        },
        accessors: {
            checked: {
                get: function(){
                    return this.input.checked;
                },
                set: function(value){
                    this.input.checked = value;
                }
            }
        }
    });
})(xtag);

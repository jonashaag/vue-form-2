import isEqual from '../../helpers/is-equal';
import merge from 'merge';

export default function(newVal, oldVal) {

  if (this.isIdenticalValue(oldVal,newVal)) return;
     
      var form = this.getForm();

      var data = {name:this.Name, value: newVal, oldValue: oldVal};

      if (typeof this.flatItems==='object') {
        var val = this.multiple?newVal:[newVal];
        var selected = this.flatItems.filter(item=>val.indexOf(item.id)>-1);
        data = merge(data,{selected});
      }

      form.dispatch('change::' + this.Name, data);
      form.dispatch('change', data);
      this.$emit('changed',data);

      if (typeof this.foreignFields!='undefined') {
       this.foreignFields.forEach(function(field){
        if (field) field.validate();
      });
     }

     this.handleTriggeredFields();
     this.dirty = this.wasReset?false:!isEqual.apply(this, [this.curValue,this.initialValue]);

     this.pristine = this.wasReset;

     this.wasReset = false;

     if (this.inForm() && !form.opts.disableValidation) {
      this.validate();
     }

  }
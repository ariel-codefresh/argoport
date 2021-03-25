apiVersion: argoproj.io/v1alpha1 
kind: WorkflowTemplate 
metadata: 
  name: iot-controller 
  spec: entrypoint: iot-controller arguments: # default values 
  parameters: 
    - name: arguments 
      value: "" 
      templates: 
          - name: iot-controller inputs: parameters: - name: capability - name: command - name: arguments - name: token - name: label container: image: roikramer/iot-controller command: ["iot"] args: - exec - "{{inputs.parameters.capability}}" - "{{inputs.parameters.command}}" - "{{inputs.parameters.arguments}}" env: - name: IOT_TOKEN value: "{{inputs.parameters.token}}" - name: IOT_LABEL value: "{{inputs.parameters.label}}"

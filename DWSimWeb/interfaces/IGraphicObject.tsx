import { IFlowsheet } from "./IFlowsheet";
import { ISimulationObject } from "./ISimulationObject";
export interface IGraphicObject { 
    //DoubleClickAction: Action;
    //DrawOverride: Action;
    Editor: Object;
    PositionConnectors():void;
    Draw():void;
    Clone(): IGraphicObject;
    //ShapeOverride(): ShapeIcon;
    //Status: Status;
    Descriptor: String;
    AdditionalInfo: Object;
    Shape: Number;
    FlippedH: Boolean;
    FlippedV: Boolean;
    //ObjectType: ObjectType;
    IsEnergyStream: boolean;
    Active: Boolean;
    Tag: String;
    Autosize: Boolean;
    IsConnector: Boolean;
    X: number;
    Y: Number;
    Name: String;
    Height: Number;
    Width: Number;
    InputConnectors: [];
    OutputConnectors: [];
    SpecialConnectors: [];
    EnergyConnector: IConnectionPoint;
    Rotation: Number;
    Calculated: Boolean;
    //Position: IPoint;
    Selected: Boolean;
    Owner: ISimulationObject;
    //HitTest(zoomedSelection: Object): Boolean;
    //Extensions: Dictionary(Of String, IGraphicObjectExtension);
    //DisplayControlPanelModeEditor();
    //ControlPanelModeEditorDisplayDelegate: Action;
    DrawMode: Number;
    //FontStyle: FontStyle;
    Flowsheet: IFlowsheet;
    //GetPointValue(type: PointValueType, Xref: Number, Yref: Number, args: List(Of Object)): Double
}

export interface IConnectionPoint{
    X(): Number;
    Y(): Number;
    //Type(): ConType;
    //Direction(): ConDir;
    AttachedConnector(): IConnectorGraphicObject;
    IsAttached(): Boolean;
    ConnectorName(): String;
    //Position: IPoint;
    IsEnergyConnector: Boolean;
    Active: Boolean;
}

export interface IConnectorGraphicObject{
    AttachedFromConnectorIndex(): Number;
    AttachedToConnectorIndex(): Number;
    AttachedToEnergy(): Boolean;
    AttachedFromEnergy(): Boolean;
    AttachedFrom(): IGraphicObject;
    AttachedTo(): IGraphicObject;
    AttachedToOutput(): Boolean;
    AttachedFromInput(): Boolean;
    Straight: Boolean;
}

export interface IGraphicObjectExtension{
    Draw(surface: Object): void;
    Clone(): IGraphicObjectExtension;
    Description(): String;
    Active(): Boolean;
    Tag(): String;
    Name(): String;
    Height(): Number;
    Width(): Number;
    //RelativePosition: IPoint;
    Selected: Boolean;
    Owner: IGraphicObject;
    HitTest(zoomedSelection: Object): Boolean;
}
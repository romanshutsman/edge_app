// Decompiled with JetBrains decompiler
// Type: PluginConnectorInterfacesLib.IPluginConnector
// Assembly: ACMApplet, Version=1.0.0.0, Culture=neutral, PublicKeyToken=bc24dc22e8ee9a7e
// MVID: A4B2C286-5393-4197-82B9-A47916686FA4
// Assembly location: C:\Program Files (x86)\Rockwell Automation\Application Code Manager\LD\ACMApplet.dll

using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace PluginConnectorInterfacesLib
{
  [CompilerGenerated]
  [Guid("81AE1220-BC05-47A5-9BD5-40E48F3451F3")]
  [TypeIdentifier]
  [ComImport]
  public interface IPluginConnector
  {
    [DispId(1)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    void Initialize([MarshalAs(UnmanagedType.Interface), In] IPluginHostConnector pConnector, [MarshalAs(UnmanagedType.IDispatch), In] object pDispController, [MarshalAs(UnmanagedType.SafeArray, SafeArraySubType = VarEnum.VT_UI4), In] Array selectedUIDs, [MarshalAs(UnmanagedType.SafeArray, SafeArraySubType = VarEnum.VT_BSTR), In] Array selectedObjectTypes, [In] lgxOrganizationalModels organizationModel);

    [DispId(2)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    bool Close();

    [DispId(3)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    int GetMinimumWidth();

    [DispId(4)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    int GetMinimumHeight();

    [DispId(5)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    int GetInitialWidth();

    [DispId(6)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    int GetInitialHeight();

    [DispId(7)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    [return: MarshalAs(UnmanagedType.BStr)]
    string GetTitle();

    [DispId(8)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    void ResizeControl([In] int newWidth, [In] int newHeight);

    [DispId(9)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    void Save();
  }
}

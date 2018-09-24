// Decompiled with JetBrains decompiler
// Type: PluginConnectorInterfacesLib.IPluginConnector2
// Assembly: ACMApplet, Version=1.0.0.0, Culture=neutral, PublicKeyToken=bc24dc22e8ee9a7e
// MVID: A4B2C286-5393-4197-82B9-A47916686FA4
// Assembly location: C:\Program Files (x86)\Rockwell Automation\Application Code Manager\LD\ACMApplet.dll

using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace PluginConnectorInterfacesLib
{
  [CompilerGenerated]
  [Guid("50A6CEAD-BA35-49C8-B7FC-EC9E96DACBC0")]
  [TypeIdentifier]
  [ComImport]
  public interface IPluginConnector2 : IPluginConnector
  {
    [DispId(1)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new void Initialize([MarshalAs(UnmanagedType.Interface), In] IPluginHostConnector pConnector, [MarshalAs(UnmanagedType.IDispatch), In] object pDispController, [MarshalAs(UnmanagedType.SafeArray, SafeArraySubType = VarEnum.VT_UI4), In] Array selectedUIDs, [MarshalAs(UnmanagedType.SafeArray, SafeArraySubType = VarEnum.VT_BSTR), In] Array selectedObjectTypes, [In] lgxOrganizationalModels organizationModel);

    [DispId(2)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new bool Close();

    [DispId(3)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new int GetMinimumWidth();

    [DispId(4)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new int GetMinimumHeight();

    [DispId(5)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new int GetInitialWidth();

    [DispId(6)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new int GetInitialHeight();

    [DispId(7)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    [return: MarshalAs(UnmanagedType.BStr)]
    new string GetTitle();

    [DispId(8)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new void ResizeControl([In] int newWidth, [In] int newHeight);

    [DispId(9)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    new void Save();

    [DispId(10)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    void InitializeEx([MarshalAs(UnmanagedType.Interface), In] IPluginHostConnector pConnector, [MarshalAs(UnmanagedType.IDispatch), In] object pDispController, [MarshalAs(UnmanagedType.BStr), In] string context);
  }
}

// Decompiled with JetBrains decompiler
// Type: PluginConnectorInterfacesLib.IPluginHostConnector
// Assembly: ACMApplet, Version=1.0.0.0, Culture=neutral, PublicKeyToken=bc24dc22e8ee9a7e
// MVID: A4B2C286-5393-4197-82B9-A47916686FA4
// Assembly location: C:\Program Files (x86)\Rockwell Automation\Application Code Manager\LD\ACMApplet.dll

using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace PluginConnectorInterfacesLib
{
  [CompilerGenerated]
  [Guid("B59EEDBC-D9A2-44E4-8B2E-53937CBC0D5B")]
  [TypeIdentifier]
  [ComImport]
  public interface IPluginHostConnector
  {
    [DispId(1)]
    [MethodImpl(MethodImplOptions.InternalCall, MethodCodeType = MethodCodeType.Runtime)]
    void Close();
  }
}

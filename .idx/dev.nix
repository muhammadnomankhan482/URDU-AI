{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.python311
  ];
  env = {};
  idx = {
    extensions = [];
    previews = {
      enable = true;
      previews = {
        web = {
          command = [
            "python"
            "-m"
            "http.server"
            "$PORT"
          ];
          manager = "web";
        };
      };
    };
    workspace = {
      onCreate = {};
      onStart = {};
    };
  };
}
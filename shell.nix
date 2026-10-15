# Dev environment: run `nix-shell` in this folder.
# Provides Node.js 22 (with npm) and installs npm dependencies on first entry.
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = [
    pkgs.nodejs_22
  ];

  shellHook = ''
    if [ ! -d node_modules ]; then
      echo "Installing npm dependencies..."
      npm install
    fi
    echo "Node $(node -v) ready. Try: npm run dev"
  '';
}
